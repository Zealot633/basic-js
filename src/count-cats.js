const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach((e) => {
    if (e === "^^") count++;

    if (Array.isArray(e)) {
      e.forEach((e) => {
        if (e === "^^") count++;
      });
    }
  });
  return count;
};
