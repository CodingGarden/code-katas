function snail(matrix) {
  // a place to store the array
  const array = [];
  // base case
  if (matrix[0].length === 0) return array;
  // keep track of current row and column
    // initialized to 0, 0
  let row = 0;
  let col = 0;
  const numCols = matrix.length;
  const numRows = matrix.length;
  let colIncreasing = true;
  let colDecreasing = false;
  let rowIncreasing = false;
  let rowDecreasing = false;
  let minRow = 1;
  let maxRow = numRows - 1;
  let minCol = 0;
  let maxCol = numCols - 1;
  // while the array length is less than the desired length n x n
  while (array.length < numRows * numCols) {
    array.push(matrix[row][col]);
    // if current col is less than number of columns
    if (col < maxCol && colIncreasing) {
      // increment the column
      col++;
      if (col === maxCol) {
        rowIncreasing = true;
        colIncreasing = false;
        colDecreasing = false;
        rowDecreasing = false;
      }
    } else if (row < maxRow && rowIncreasing) {
      // else if row is less than number of rows
      // increment row
      row++;
      if (row === maxRow) {
        rowIncreasing = false;
        colIncreasing = false;
        colDecreasing = true;
        rowDecreasing = false;
      }
    } else if (col > minCol && colDecreasing) {
      // else if current col is greater than 0
      // decrement the column
      col--;
      if (col === minCol) {
        rowIncreasing = false;
        colIncreasing = false;
        colDecreasing = false;
        rowDecreasing = true;
      }
    } else if (row > minRow && rowDecreasing) {
      // else if the current row is greater than 0
      // decrement the row
      row--;
      if (row === minRow) {
        minRow++;
        maxRow--;
        minCol++;
        maxCol--;
        rowIncreasing = false;
        colIncreasing = true;
        colDecreasing = false;
        rowDecreasing = false;
      }
    }
  }
  return array;
}

function snail(matrix) {
  const array = [];
  if (matrix[0].length === 0) return array;

  const matrixLength = matrix.length;
  
  const dir = {
    right: true,
    down: false,
    left: false,
    up: false
  };
  
  const resetDir = () => Object.keys(dir).forEach(key => dir[key] = false);

  let row = 0;
  let col = 0;

  let min = 0;
  let max = matrixLength - 1;

  while (array.length < matrixLength * matrixLength) {
    array.push(matrix[row][col]);
    if (col < max && dir.right) {
      col++;
      if (col === max) {
        resetDir();
        dir.down = true;
      }
    } else if (row < max && dir.down) {
      row++;
      if (row === max) {
        resetDir();
        dir.left = true;
      }
    } else if (col > min && dir.left) {
      col--;
      if (col === min) {
        resetDir();
        dir.up = true;
      }
    } else if (row > min + 1 && dir.up) {
      row--;
      if (row === min + 1) {
        min++;
        max--;
        resetDir();
        dir.right = true;
      }
    }
  }
  return array;
}

// const result = snail([
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ], [1,2,3,4,5,6,7,8,9]);

// console.log(result);

// const result = snail([
//   [ 1,  2,  3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10,  9,  8, 7]
// ], [1,2,3,4,5,6,7,8,9]);

// console.log(result);

// const result = snail([
//   [ 1,   2,   3,  4,  5],
//   [16,  17,  18, 19,  6],
//   [15,  24,  25, 20,  7],
//   [14,  23,  22, 21,  8],
//   [13,  12,  11, 10,  9]
// ]);

// console.log(result);

const result = snail([
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ],
  [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ],
  [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 ],
  [ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49 ],
  [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ],
  [ 60, 61, 62, 63, 64, 65, 66, 67, 68, 69 ],
  [ 70, 71, 72, 73, 74, 75, 76, 77, 78, 79 ],
  [ 80, 81, 82, 83, 84, 85, 86, 87, 88, 89 ],
  [ 90, 91, 92, 93, 94, 95, 96, 97, 98, 99 ]
]);

console.log(result.toString() === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 80, 70, 60, 50, 40, 30, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 28, 38, 48, 58, 68, 78, 88, 87, 86, 85, 84, 83, 82, 81, 71, 61, 51, 41, 31, 21, 22, 23, 24, 25, 26, 27, 37, 47, 57, 67, 77, 76, 75, 74, 73, 72, 62, 52, 42, 32, 33, 34, 35, 36, 46, 56, 66, 65, 64, 63, 53, 43, 44, 45, 55, 54].toString());

