const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fight_watch", "root", "Elliot1!", {
  host: "ec2-18-217-156-71.us-east-2.compute.amazonaws.com",
  dialect: "mysql",
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

const Fighters = sequelize.define("Fighters", fighters);
// sequelize.sync({force: true}) //drops tables and recreates them
sequelize.sync();

const insertFighter = async (fighter) => {
  try {
    const createdFighter = await Fighters.create(fighter);
    return createdFighter;
  } catch (error) {
    if (error instanceof Error) {
      const sequelizeError = error.original;
      if (sequelizeError instanceof Error) {
        const { name, message, errno, ...rest } = sequelizeError;
        const newError = {
          name,
          message,
          errno,
          error: rest,
        };
        throw newError;
      } else {
        throw sequelizeError;
      }
    } else {
      throw error;
    }
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

module.exports = {
  insertFighter,
  loadFighters,
  removeFighter,
};
