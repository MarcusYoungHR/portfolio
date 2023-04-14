const axios = require('axios')
const cheerio = require('cheerio')

const searchFighter = function (name) {
  return axios.get('https://www.googleapis.com/customsearch/v1', {
    params: {
      key: 'AIzaSyBnw10FN0TjZuAwKJWht16XSqOp5aQ0eeg',
      cx: '007218699401475344710:xatgqbhqag0',
      q: name
    }
  }).then((res) => {
    const fighterLink = res.data.items[0].link
    return axios.get(fighterLink).then((res) => {
      const $ = cheerio.load(res.data)
      const dateHTML = $('[itemprop=startDate]').attr('content')
      // dateHTML = dateHTML.slice(0, dateHTML.indexOf('T')).toLocaleString('default', {month: 'long'})

      const fighter = {
        name: $('.fn').text(),
        image: 'https://www.sherdog.com' + $('.profile-image').attr('src'),
        next_opponent: $('.right_side a span').text() || "TBD",
        fight_date: dateHTML,
        url: fighterLink
      }

      return fighter
    })
  }).catch((err) => {
    console.log(err)
  })
}

module.exports = searchFighter
