module.exports = function solveSudoku(matrix, str = 0, col = 0) {
      let location = FindZeroPosition(matrix, str, col)
      str = location[0];
      col = location[1];

      if (str === -1) {
          return matrix;
      }
      for (let i = 1; i <= 9; i++) {
          if (problems(str, col, i, matrix)) {
              matrix[str][col] = i
              if (solveSudoku(matrix, str, col)) {
                  return matrix;
              }
      matrix[str][col] = 0;
          }
      }
      return false;
      function problems(r, c, i, matrix) {
          for (var j = 0; j < 9; j++) {
              if (matrix[j][c] === i) {
                  return false;
            }
            else if (matrix[r][j] === i) {
                  return false;
            }
          }
      r = Math.floor(r / 3) * 3
      c = Math.floor(c / 3) * 3
      for (let str = 0; str < 3; str++) {
              for (var col = 0; col < 3; col++) {
                  if (matrix[str + r][col + c] === i) {
                      return false;
              }
            }
          }
          return true;
      }
      function FindZeroPosition(grid, str, col) {
          for (str = 0; str < 9; col = 0, str++) {
              for (col = 0; col < 9; col++) {
                  if (grid[str][col] === 0) {
                     return [str, col];
          }
        }
      }
      return [-1, -1];
    }
   }
