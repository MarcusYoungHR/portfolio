const searchFighter = require("./sherdog-scraper")
const { loadFighters, updateFighter } = require("../database/fight-watch");


const updateFightDates = async () => {
  console.log('updating fighter data')

  const fightersArray = await loadFighters();

  for (const elem of fightersArray) {
    try {
      const fighter = await searchFighter(elem.name);
      const updatedFighter = await updateFighter(fighter)
    } catch (error) {
      console.error(
        `Error occurred while searching for fighter ${elem}:`,
        error
      );
    }
  }
};

const updateFightDatesInterval = () => {
  const fullDayInMS = 1000 * 60 * 60 * 24;
  setInterval(updateFightDates, fullDayInMS)
}

module.exports = updateFightDatesInterval
