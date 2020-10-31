const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    /[A-Za-z]/.test(sampleActivity) ||
    sampleActivity <= 0
  ) {
    return false;
  }

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rate
  );
};
