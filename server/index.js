const express = require("express");
const searchFighter = require("./utils/sherdog-scraper");
const bodyParser = require("body-parser");
const {
  insertFighter,
  loadFighters,
  removeFighter,
  insertTask,
  loadTasks,
  loadTask,
  findProgress,
  upsertProgress,
  getProgressByDate,
  getProgressPercentageByDate,
} = require("./database/fight-watch");
const {
  updateFightDatesInterval,
  updateFightDates,
} = require("./utils/update-fighters");
const path = require("path");
const { format } = require("date-fns");

const app = express();
app.use(bodyParser.json());
const port = 4000;

app.use(express.static(path.join(__dirname, "../build")));

// console.log(path.join(__dirname, '../build'))

const dailyProgressEntry = async() => {

}

app.get("/graph", (req, res) => {
  res.sendFile(path.join(__dirname, "../ember/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
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

app.get("/load-tasks", (req, res) => {
  loadTasks()
    .then((tasks) => {
      // console.log(tasks);
      res.send(tasks);
    })
    .catch((err) => {
      console.log(err);
      // res.error(err);
    });
});

app.get("/load-task", (req, res) => {
  const { id } = req.query;
  loadTask(id)
    .then((task) => {
      // console.log(tasks);
      res.send(task);
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});

app.get("/load-progress", (req, res) => {
  const { id } = req.query;
  const currentDate = format(new Date(), "yyyy-MM-dd");
  findProgress(id, currentDate)
    .then((progress) => {
      // console.log(tasks);
      res.send(progress);
    })
    .catch((err) => {
      console.log(err);
      res.error(err);
    });
});

app.get('/load-progress-by-date', async (req, res) => {
  try {
    const data = await getProgressPercentageByDate();
    res.send(data);
  } catch (error) {
    console.error('There was an error in the route: ', error);
    res.status(500).send({ error: "An error occurred" });
  }
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
