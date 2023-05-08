const { Sequelize } = require("sequelize");
const { format } = require("date-fns");
const cron = require ("node-cron");

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

const tasks = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  measurement: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  goal: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  recurrence: {
    allowNull: false,
    type: Sequelize.JSON,
    get() {
      return JSON.parse(this.getDataValue("recurrence"));
    },
    set(value) {
      this.setDataValue("recurrence", JSON.stringify(value));
    },
  },
};

const progress = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  remaining: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  date: {
    allowNull: false,
    type: Sequelize.DATEONLY,
  },
  goal: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  percentage: {
    type: Sequelize.VIRTUAL,
    get() {
      const goal = this.getDataValue("goal");
      const remaining = this.getDataValue("remaining");
      if (goal === 0) return 0;
      return 100 * ((goal - remaining) / goal);
    },
  },
};

const Tasks = sequelize.define("Tasks", tasks);
const Progress = sequelize.define("Progress", progress);
const Fighters = sequelize.define("Fighters", fighters);

Progress.belongsTo(Tasks, { foreignKey: "task_id", onDelete: "CASCADE" });
Tasks.hasMany(Progress, { foreignKey: "task_id", onDelete: "CASCADE" });

// sequelize.sync({ force: true }); //drops tables and recreates them
sequelize.sync();

const findTasksByDay = async (dayOfWeek) => {
  try {
    const dayPattern = `\"${dayOfWeek}\":\"on\"`;
    // const tasks = await sequelize.query(
    //   `SELECT * FROM Tasks WHERE recurrence LIKE :dayPattern;`,
    //   {
    //     replacements: { dayPattern: `%${dayPattern}%` },
    //     type: Sequelize.QueryTypes.SELECT,
    //     model: Tasks,
    //     mapToModel: true
    //   }
    // );
    const tasks = await sequelize.query(
      "SELECT * FROM Tasks WHERE recurrence LIKE '%\"Monday\":\"on\"%';",
      {
        type: Sequelize.QueryTypes.SELECT,
        model: Tasks,
        mapToModel: true
      }
    );

    console.log(`Tasks with ${dayOfWeek} recurrence:`, tasks);
    return tasks;
  } catch (error) {
    console.error('Error querying tasks:', error);
  }
};


const dailyProgressEntry = async () => {
  const currentDay = getCurrentDayOfWeek();
  const tasks = await findTasksByDay("Monday");
  console.log(tasks);

}

setTimeout(dailyProgressEntry, 2000)


Tasks.addHook("afterCreate", async (task, options) => {
  console.log(task.recurrence);
  if (hasCurrentDayKey(task.recurrence)) {
    console.log("Task has current day key");
    const newProgress = await Progress.create({
      remaining: task.goal,
      date: format(new Date(), "yyyy-MM-dd"),
      task_id: task.id,
      goal: task.goal,
    });

    if (!newProgress) {
      throw new Error("Could not create progress for the task");
    }
  } else {
    console.log("Task does not have current day key");
  }
});

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
        task_id: taskId,
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
};
