//const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let objHanoi = { turns: 0, seconds: 0 };
  let turns = 0;

  for (i=1;i<=disksNumber;i++) {
      turns = (turns * 2) + 1;
  }

  objHanoi.turns   = turns;
  objHanoi.seconds = Math.floor((3600/turnsSpeed) * turns);
  
  return (objHanoi);

};
