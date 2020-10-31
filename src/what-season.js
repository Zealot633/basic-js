const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  let seasons = ["winter", "spring", "summer", "autumn"];
  if (date instanceof Date && Object.entries(date).length === 0) {
    if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
      return seasons[0];
    } else if (
      date.getMonth() == 2 ||
      date.getMonth() == 3 ||
      date.getMonth() == 4
    ) {
      return seasons[1];
    } else if (
      date.getMonth() == 5 ||
      date.getMonth() == 6 ||
      date.getMonth() == 7
    ) {
      return seasons[2];
    } else {
      return seasons[3];
    }
  } else {
    throw new Error("THROWN");
  }
};
