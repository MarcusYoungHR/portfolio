const { Sequelize } = require("sequelize");
const { format, parseISO } = require("date-fns");
const cron = require("node-cron");

const {
  getCurrentDayOfWeek,
  hasCurrentDayKey,
} = require("../utils/get-current-day");

const sequelize = new Sequelize("fight_watch", "root", "Elliot1!", {
  host: "ec2-18-217-156-71.us-east-2.compute.amazonaws.com",
  dialect: "mysql",
  logging: false,
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

function getCurrentTime() {
  const now = new Date();
  const formattedTime = format(now, 'hh:mm:ss a');
  return formattedTime;
}

console.log("Current time:", getCurrentTime())

// connectToDatabase();

const fighters = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  fight_date: {
    allowNull: false,
    type: Sequelize.STRING,
    defaultValue: "TBD",
  },
  next_opponent: {
    allowNull: false,
    type: Sequelize.STRING,
    defaultValue: "TBD",
  },
  image: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
};

const idField = {
  type: Sequelize.INTEGER,
  autoIncrement: true,
  primaryKey: true,
};

const notNullIntField = {
  allowNull: false,
  type: Sequelize.INTEGER,
};

const refField = (model, key) => ({
  type: Sequelize.INTEGER,
  references: { model, key },
  onDelete: "CASCADE",
});

const tasks = {
  id: idField,
  name: { allowNull: false, type: Sequelize.STRING },
  description: { allowNull: true, type: Sequelize.STRING },
  measurement: { allowNull: false, type: Sequelize.STRING },
  goal: notNullIntField,
  recurrence: { allowNull: false, type: Sequelize.JSON },
  weight: { allowNull: true, type: Sequelize.INTEGER },
};

const progress = {
  id: idField,
  name: { allowNull: false, type: Sequelize.STRING },
  remaining: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  date: { allowNull: false, type: Sequelize.DATEONLY },
  goal: notNullIntField,
  percentage: {
    type: Sequelize.VIRTUAL,
    get() {
      const goal = this.getDataValue("goal");
      const remaining = this.getDataValue("remaining");
      return goal === 0 ? 0 : 100 * ((goal - remaining) / goal);
    },
  },
  measurement: { allowNull: false, type: Sequelize.STRING },
  taskId: refField("Tasks", "id"),
};

const wastedTime = {
  id: idField,
  time: { allowNull: false, type: Sequelize.INTEGER },
  date: { allowNull: false, type: Sequelize.DATEONLY, unique: true },
}

const Tasks = sequelize.define("Tasks", tasks);
const Progress = sequelize.define("Progress", progress);
const Fighters = sequelize.define("Fighters", fighters);
const WastedTime = sequelize.define("WastedTime", wastedTime);

Progress.belongsTo(Tasks, { foreignKey: "taskId" }); // Changed to 'taskId'
Tasks.hasMany(Progress, { foreignKey: "taskId" }); // Changed to 'taskId'


// sequelize.sync({ force: true }); //drops tables and recreates them
sequelize.sync();

const upsertWastedTime = async (time) => {
  try {
    const wastedTime = await WastedTime.upsert({
      time,
      date: format(new Date(), "yyyy-MM-dd"),
    });

    console.log("Wasted time:", wastedTime);
    return wastedTime;
  } catch (error) {
    console.error("Error creating wasted time:", error);
  }
}

const findWastedTime = async () => {
  try {
    const wastedTime = await WastedTime.findOne({
      where: {
        date: format(new Date(), "yyyy-MM-dd"),
      },
    });

    console.log("Wasted time:", wastedTime);
    return wastedTime;
  } catch (error) {
    console.error("Error querying wasted time:", error);
  }
};

const dailyWastedTimeEntry = async () => {
  try {
    const wastedTime = await WastedTime.create({
      time: 0,
      date: format(new Date(), "yyyy-MM-dd"),
    });

    console.log("Wasted time:", wastedTime);
    return wastedTime;
  } catch (error) {
    console.error("Error creating wasted time:", error);
  }
}

const findTasksByDay = async (dayOfWeek) => {
  try {
    const dailyTasks = await Tasks.findAll({
      where: {
        recurrence: {
          [Sequelize.Op.and]: [
            sequelize.literal(`JSON_CONTAINS(recurrence, '"${dayOfWeek}"')`),
          ],
        },
      },
    });

    console.log(`Tasks with ${dayOfWeek} recurrence:`, dailyTasks);
    return dailyTasks;
  } catch (error) {
    console.error("Error querying tasks:", error);
  }
};

const createProgressFromTask = async (task) => {
  const newProgress = await Progress.create({
    remaining: task.goal,
    date: format(new Date(), "yyyy-MM-dd"),
    taskId: task.id,
    goal: task.goal,
    measurement: task.measurement,
    name: task.name,
  });

  if (!newProgress) {
    throw new Error("Could not create progress for the task");
  }
};

const dailyProgressEntry = async () => {
  const currentDay = getCurrentDayOfWeek();
  const tasks = await findTasksByDay(currentDay);

  for (const task of tasks) {
    await createProgressFromTask(task);
  }

  console.log("Daily progress entry complete");
};

cron.schedule("0 5 * * *", () => {
  dailyProgressEntry()
  dailyWastedTimeEntry();
});

Tasks.addHook("afterCreate", async (task, options) => {
  // console.log(task.recurrence);
  if (hasCurrentDayKey(task)) {
    console.log("Task has current day key");

    await createProgressFromTask(task);

  } else {
    console.log("Task does not have current day key");
  }
});

const getProgressByDate = async () => {
  try {
    const progressByDateAndTask = await Progress.findAll({
      attributes: ["date"],
      group: ["date"],
      order: [["date", "DESC"]],
    });
    console.log("Progress by date and task:", progressByDateAndTask);
    return progressByDateAndTask;
  } catch (error) {
    console.error(
      "There was an error getting progress by date and task: ",
      error
    );
  }
};

const getProgressPercentageByDate = async () => {
  try {
    const progresses = await Progress.findAll({
      attributes: ["date", "goal", "remaining"],
      order: [["date", "DESC"]],
    });

    const grouped = progresses.reduce((result, progress) => {
      const date = progress.date;
      if (!result[date]) {
        result[date] = {
          total: 0,
          count: 0,
        };
      }

      const percentage =
        progress.goal === 0
          ? 0
          : 100 * ((progress.goal - progress.remaining) / progress.goal);
      result[date].total += percentage;
      result[date].count += 1;

      return result;
    }, {});

    const averageProgressByDate = Object.entries(grouped).map(
      ([date, data]) => {
        const parsedDate = parseISO(date);
        const formattedDate = format(parsedDate, "MMMM d");
        return {
          date: formattedDate,
          averagePercentage: data.total / data.count,
        };
      }
    );

    console.log("Average progress by date:", averageProgressByDate);
    return averageProgressByDate;
  } catch (error) {
    console.error(
      "There was an error getting average progress by date: ",
      error
    );
  }
};

async function insertTask(task) {
  try {
    const newTask = await Tasks.create(task);
    console.log("New task created with task:", newTask);
    return;
  } catch (error) {
    console.error("Error while creating a new task:", error);
  }
}

const loadTasks = () => {
  return Tasks.findAll();
};

const loadTask = async (id) => {
  try {
    const task = await Tasks.findOne({
      where: {
        id: id,
      },
    });

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findProgress = async (taskId, targetDate) => {
  console.log("Finding progress with task id:", taskId);
  console.log("Finding progress with target date:", targetDate);
  try {
    const progressWithTask = await Progress.findOne({
      where: {
        taskId: taskId,
        date: targetDate,
      },
    });

    if (!progressWithTask) {
      console.log("Progress not found");
      return;
    }

    console.log(
      "Progress with Task:",
      JSON.stringify(progressWithTask, null, 2)
    );
    return progressWithTask;
  } catch (error) {
    console.error("Error while fetching progress with task:", error);
  }
};

async function upsertProgress(id, newRemaining) {
  try {
    const progressInstance = await Progress.findByPk(id);
    if (progressInstance) {
      progressInstance.remaining = newRemaining;
      await progressInstance.save();
      console.log("Remaining updated successfully");
    } else {
      console.log("No progress found with the given id");
    }
  } catch (error) {
    console.error("Error updating remaining:", error);
  }
}

const insertFighter = async (fighter) => {
  try {
    const [newFighter, created] = await Fighters.upsert(fighter);
    console.log(
      `Fighter ${created ? "created" : "updated"}:`,
      newFighter.toJSON()
    );
    return newFighter.id;
  } catch (error) {
    console.log("error inserting fighter:\n", error);
    throw error;
  }
};

const loadFighters = () => {
  return Fighters.findAll();
};

const removeFighter = (id) => {
  return Fighters.destroy({
    where: {
      id: id,
    },
  });
};

const updateFighter = async (fighter) => {
  return Fighters.upsert(fighter);
};

module.exports = {
  insertFighter,
  loadFighters,
  removeFighter,
  updateFighter,
  insertTask,
  loadTasks,
  loadTask,
  findProgress,
  upsertProgress,
  getProgressByDate,
  getProgressPercentageByDate,
  upsertWastedTime,
  findWastedTime
};
