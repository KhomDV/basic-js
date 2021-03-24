const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if ( !date ) return ('Unable to determine the time of year!');

  if (date.hasOwnProperty("getMonth")) throw new Error();
  
  const month = date.getMonth();
  if ( isNaN(month) ) throw new Error();

  let season = "";
  if(month >= 11 || month <= 1) {
    season = 'winter';
  }
  if(month >= 2 && month <= 4) {
    season = 'spring';
  }
  if(month >= 5 && month <= 7) {
    season = 'summer';
  }
  if(month >= 8 && month <= 10) {
    season = 'autumn';
  } 

  return (season);  
};
