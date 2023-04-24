const { Sequelize } = require("sequelize");

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

const Fighters = sequelize.define("Fighters", fighters);
// sequelize.sync({force: true}) //drops tables and recreates them
sequelize.sync();

const inseratFighter = async (fighter) => {
  try {
    const [foundOrCreatedFighter, created] = await Fighters.findOrCreate({
      where: { name: fighter.name },
      defaults: fighter,
    });

    if (!created) {
      console.log("Record already exists:", foundOrCreatedFighter.id);
    }
    return foundOrCreatedFighter.id;
  } catch (error) {
    const { original } = error;
    if (original instanceof Error) {
      const { name, message, errno, ...rest } = original;
      const newError = { name, message, errno, error: rest };
      console.log(newError);
      throw newError;
    }
    throw error;
  }
};

const insertFighter = async (fighter) => {
  try {
    const [newFighter, created] = await Fighters.upsert(fighter)
    console.log(`Fighter ${created ? 'created' : 'updated'}:`, newFighter.toJSON());
    return newFighter.id
  } catch (error){
    console.log('error inserting fighter:\n', error)
    throw error
  } 
}

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
  return Fighters.upsert(fighter)
}

module.exports = {
  insertFighter,
  loadFighters,
  removeFighter,
  updateFighter
};
