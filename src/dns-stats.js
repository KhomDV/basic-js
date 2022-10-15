const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSStats = {};
  for (let i=0; i < domains.length; i++) {
    let strDomains = "";
    domains[i].split('.').reverse().reduce((DNSStats, item) => {
      strDomains = strDomains +"."+ item;
      DNSStats[strDomains] = (DNSStats[strDomains] || 0) + 1;
      return DNSStats;
    }, DNSStats);
  }
  return DNSStats;
}

module.exports = {
  getDNSStats
};
