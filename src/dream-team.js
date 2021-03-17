//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

	if ( !Array.isArray(members) || members.length === 0 ) return (false);

  sDream = members.filter(e => typeof (e) === "string").map(e => e.trim().substring(0,1).toUpperCase()).sort().join('');
  if (typeof (sDream) === "string") {
    return (sDream);
  } else {
    return (false);
  }
};
