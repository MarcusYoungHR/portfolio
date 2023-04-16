const express = require("express");
const searchFighter = require("./utils/sherdog-scraper");
const bodyParser = require("body-parser");
const {
  insertFighter,
  loadFighters,
  removeFighter,
} = require("./database/fight-watch");
const updateFightDatesInterval = require("./utils/update-fighters");
const path = require("path");

const app = express();
app.use(bodyParser.json());
const port = 4000;

app.use(express.static(path.join(__dirname, "../build")));

// console.log(path.join(__dirname, '../build'))

app.get('/graph', (req, res) => {
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
      console.log(fighters);
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

updateFightDatesInterval();
