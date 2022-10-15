const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let result = "";
  for (let i=0; i < str.length-1; i++) {
    if (+str[i] < +str[i+1]) {
      result = str.substring(0,i) + str.substring(i+1);
      break;
    } else {
      if (i === str.length-2) {
        if (+str[i] < +str[i+1]) {
          result = str.substring(0,i) + str.substring(i+1);  
        } else {
          result = str.substring(str.length-1,0);
        }
      }
    }
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
