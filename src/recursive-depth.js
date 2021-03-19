const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
      let depth = 1;
      let currentDepth = 1;
      arr.map(element => {
          if (Array.isArray(element)) {
              currentDepth += this.calculateDepth(element);
              if (depth < currentDepth) {
                  depth = currentDepth;
              }
          }
          currentDepth = 1;
      })
      return (depth);
  }
};