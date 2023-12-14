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
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;

  const convToStr = (value) => {
    return value !== null && typeof value === 'object' && Symbol.toPrimitive in value ?
      String(value[Symbol.toPrimitive]('string')) :
      String(value);
  };

  let res = '';

  for (let i = 0; i < repeatTimes; i++) {
    res += convToStr(str);

    if (addition !== null || addition !== undefined) {
      res += (convToStr(addition) + additionSeparator).repeat(additionRepeatTimes - 1) + convToStr(addition);
    }

    if (i < repeatTimes - 1) res += separator;
  }
  return res;
}

module.exports = {
  repeater
};
