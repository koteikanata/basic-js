const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = charsCounter(s1);
  const chars2 = charsCounter(s2);

  let sum = 0;

  chars1.forEach((v, ch) => {
    if (chars2.has(ch)) {
      sum += Math.min(v, chars2.get(ch));
    }
  });

  function charsCounter(str) {
    const map = new Map();

    str.split('').forEach(ch => {
      map.set(ch, map.get(ch) + 1 || 1);
    });
    return map;
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount
};
