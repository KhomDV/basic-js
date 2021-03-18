//const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let sRepeater = "";
  let addStr = "";

  let repeatTimes = "repeatTimes" in options ? options.repeatTimes : (str === "" ? 0: 1);
  let separator = "separator" in options ? options.separator : '+';
  let addition = "addition" in options ? options.addition : "";
  let additionRepeatTimes = "additionRepeatTimes" in options ? options.additionRepeatTimes : (addition === "" ? 0 : 1);
  let additionSeparator = "additionSeparator" in options ? options.additionSeparator : '|';

  for (i=1;i<=repeatTimes;i++) {
      addStr = "";
      for (j=1;j<=additionRepeatTimes;j++) {
          addStr = addStr.concat((addStr !== "" ? additionSeparator : ""), addition);
      }    
      sRepeater = sRepeater.concat((sRepeater !== "" ? separator : ""), str, addStr);
  }

  return (sRepeater);

};
  