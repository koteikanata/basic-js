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
  const res = new Map();

  for (const domain of domains) {
    const arr = domain.split('.').reverse();
    let curDomain = '';

    arr.forEach((item, i) => {
      curDomain = (i === 0) ? `.${item}` : `${curDomain}.${item}`;

      res.set(curDomain, (res.get(curDomain) || 0) + 1);
    });
  }

  return Object.fromEntries(res);
}

module.exports = {
  getDNSStats
};
