const { format, toDate } = require("date-fns")

// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const now = new Date();
  const dayOfWeek = format(now, "EEEE");
  return dayOfWeek;
}

function hasCurrentDayKey(obj) {
  console.log(obj)
  const currentDay = getCurrentDayOfWeek();

  for (const key in obj) {
    if (key === currentDay) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getCurrentDayOfWeek,
  hasCurrentDayKey,
};
