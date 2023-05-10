const { format, toDate } = require("date-fns")

// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const now = new Date();
  const dayOfWeek = format(now, "EEEE");
  return dayOfWeek;
}

function hasCurrentDayKey({recurrence}) {
  const currentDay = getCurrentDayOfWeek();

  if (recurrence.includes(currentDay)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getCurrentDayOfWeek,
  hasCurrentDayKey,
};
