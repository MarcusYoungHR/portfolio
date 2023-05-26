const express = require("express");
const searchFighter = require("./utils/sherdog-scraper");
const bodyParser = require("body-parser");
const {
  insertFighter,
  loadFighters,
  removeFighter,
  insertTask,
  upsertProgress,
  upsertWastedTime,
  findAllTasks,
  findAllProgress,
  findAllWastedTime,
  createVisitor
} = require("./database/fight-watch");
const {
  updateFightDatesInterval,
  updateFightDates,
} = require("./utils/update-fighters");
const path = require("path");

const app = express();
app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(async (req, res, next) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let userAgent = req.headers['user-agent']
  let language = req.headers['accept-language'];
  let referer = req.headers['referer'];
  try {
    await createVisitor(ip, userAgent, language, referer);
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});


const port = 4000;

app.use(express.static(path.join(__dirname, "../build")));

app.get("/graph", (req, res) => {
  res.sendFile(path.join(__dirname, "../ember/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/wasted-time", (req, res) => {
  console.log(req.body);
  const { time, date } = req.body;
  upsertWastedTime(time, date)
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  searchFighter(name)
    .then((fighter) => {
      return insertFighter(fighter);
    })
    .then((data) => {
      console.log(data);
      res.status(200).send(`${data}`);
    })
    .catch((err) => {
      // console.log(err)
      res.status(500).send(err);
    });
});

app.get("/load-fighters", (req, res) => {
  loadFighters()
    .then((fighters) => {
      // console.log(fighters);
      res.send(fighters);
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});

app.delete("/remove-fighter/:id", (req, res) => {
  const { id } = req.params;
  removeFighter(id)
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});

app.get("/manual-update", (req, res) => {
  updateFightDates();
});

//productivity routes

app.get("/load-productivity", (req, res) => {
  const results = {};
  findAllTasks()
    .then((tasks) => {
      results.tasks = tasks;
      return findAllProgress();
    })
    .then((progress) => {
      results.progress = progress;
      return findAllWastedTime();
    })
    .then((wastedTime) => {
      results.wastedTime = wastedTime;
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});

app.post("/add-task", (req, res) => {
  const { task } = req.body;
  if (task.measurement === "time") {
    task.goal =
      Number(task.hours) * 60 * 60 * 1000 + Number(task.minutes) * 60 * 1000;
    delete task.minutes;
    delete task.hours;
  } else if (task.measurement === "checkbox") {
    task.goal = 1;
  }
  insertTask(task)
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});


app.put("/update-progress", (req, res) => {
  const { id, remaining } = req.body;
  upsertProgress(id, remaining).then(() => {
    res.send("success");
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

updateFightDatesInterval();
