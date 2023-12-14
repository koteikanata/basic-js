const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date[Symbol.toStringTag] || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month < 0 || month > 11) {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const seasonIndex = Math.floor((month + 1) / 3) % 4;

  return seasons[seasonIndex];
}

module.exports = {
  getSeason
};
