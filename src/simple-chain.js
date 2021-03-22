const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    //this.chain.push( (this.chain.length === 0 ? "" : "~~") + `( ${String(value)} )`);
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ( position !== Number() || !isInteger(position) || position <= 0 || this.chain.length < (position-1) ) {
      this.chain = [];
      return false
    };
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.join("~~");
  }
};

module.exports = chainMaker;
