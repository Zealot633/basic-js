const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let result = [];

  arr.forEach((e) => {
    typeof e == "string" ? result.push(e.trim()[0].toUpperCase()) : false;
  });
  return result.sort().join("");
};
