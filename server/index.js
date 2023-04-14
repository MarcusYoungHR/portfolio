const express = require('express')
const searchFighter = require('./sherdog-scraper')
const bodyParser = require('body-parser')
const { insertFighter, loadFighters, removeFighter } = require('./database/fight-watch')

const app = express()
app.use(bodyParser.json())
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/search', (req, res) => {
  const { name } = req.body
  searchFighter(name).then((fighter) => {
    return insertFighter(fighter)
  }).then(() => {
    res.send('success')
  }).catch((err) => {
    console.log(err)
    res.status(500).send(err)
  })
})

app.get('/load-fighters', (req, res) => {
  loadFighters().then((fighters) => {
    console.log(fighters)
    res.send(fighters)
  }).catch((err) => {
    console.log(err)
    res.error(err)
  })
})

app.delete('/remove-fighter/:id', (req, res) => {
  const { id } = req.params
  removeFighter(id).then(() => {
    res.send('success')
  }).catch((err) => {
    console.log(err)
    res.error(err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})