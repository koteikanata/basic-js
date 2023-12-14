const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let k = 0; k < cols; k++) {
      const neighs = [
        [i - 1, k - 1], [i - 1, k], [i - 1, k + 1],
        [i, k - 1],                 [i, k + 1],
        [i + 1, k - 1], [i + 1, k], [i + 1, k + 1],
      ];

      row.push(neighs.reduce((acc, [x , y]) => {
        return acc + (
                // находится ли ячейка в пределах границ матрицы 
                x >= 0 && x < rows && y >= 0 && y < cols 
                // и содержит ли она мину
                && matrix[x][y])
      }, 0));
    }
    res.push(row);
  }
  return res;

  function isExist(num) {
    return Math.max(num, 0);
  }
}

module.exports = {
  minesweeper
};
