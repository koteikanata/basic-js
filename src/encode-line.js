const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';

  let prev = str[0];
  let curSum = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== prev) {
      res = res + ((curSum === 1 ? '' : curSum) + prev);
      prev = str[i];
      curSum = 1;
    } else {
      curSum++;
    }
    
    if (i === str.length - 1) {
      res = res + ((curSum === 1 ? '' : curSum) + prev);
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
