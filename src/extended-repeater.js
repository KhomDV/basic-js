const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let sRepeater = "";
  let addStr = "";

  str = String(str);

  const repeatTimes = "repeatTimes" in options ? options.repeatTimes : (str === '' ? 0 : 1);
  const separator = "separator" in options ? options.separator : '+';
  const addition = "addition" in options ? String(options.addition) : '';
  const additionRepeatTimes = "additionRepeatTimes" in options ? options.additionRepeatTimes : (addition === '' ? 0 : 1);
  const additionSeparator = "additionSeparator" in options ? options.additionSeparator : '|';

  for (let i=1;i<=repeatTimes;i++) {
    addStr = "";
    for (let j=1;j<=additionRepeatTimes;j++) {
      addStr = addStr.concat((addStr !== "" ? additionSeparator : ""), addition);
    }    
    sRepeater = sRepeater.concat((sRepeater !== "" ? separator : ""), str, addStr);
  }
  return (sRepeater);
}

module.exports = {
  repeater
};
