const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  const reg = new RegExp('^-?\\d+\\.?\\d*$');

  if (typeof sampleActivity !== "string" || !(reg.test(sampleActivity)) ) { return (false)};

  const nActivity = parseFloat(sampleActivity);
  
  if (nActivity <= 0 || nActivity > 15) {return (false)};

  return ( Math.ceil( Math.log(MODERN_ACTIVITY / nActivity) / (Math.log(2) / HALF_LIFE_PERIOD) ) );

};
