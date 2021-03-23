const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return arr;

  for (let i=0; i<arr.length; i++) {
      switch (arr[i]) {
      case `--discard-next`:
          result.push(null);
          i++;
          break;
      case `--discard-prev`:
          if (result.length > 0) {
              result.pop();
          }
          break;
      case `--double-next`:
          if (arr.length-1 > i) {
              result.push(arr[i+1]);
          }
          break;
      case `--double-prev`:
          if (result.length > 0) {
              result.push(result[result.length-1]);
          }
          break;
      default:
          result.push(arr[i]);
          break;
      }
  }

  result = result.filter( (e) => e !== null);
  return result;
};
