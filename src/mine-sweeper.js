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
  //throw new NotImplementedError('Not implemented');
  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        matrix[i][j] = 10;
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= 10) {
        let x1 = i - 1 < 0 ? 0 : i - 1;
        let x2 = i + 1 > matrix.length-1 ? matrix.length-1 : i + 1;
        let y1 = j - 1 < 0 ? 0 : i - 1;
        let y2 = j + 1 > matrix[i].length-1 ? matrix[i].length-1 : j + 1;
        for (let x=x1; x<=x2; x++) {
          for (let y=y1; y<=y2; y++) {
            if (i!==x || j!==y) matrix[x][y] += 1;
          }
        }
      }
    }
  }

  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      if (matrix[i][j] >= 10) matrix[i][j] -= 10;
    }
  }
  return matrix;
}

module.exports = {
  minesweeper
};
