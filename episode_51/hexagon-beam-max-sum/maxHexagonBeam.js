function createHexagon(n, seq) {
  const hexagon = [];
  const height = 2 * n - 1;
  let current = 0;
  let currentWidth = n;
  for (let row = 0; row < height; row++) {
    const beam = [];
    for (let col = 0; col < currentWidth; col++) {
      beam.push(seq[current % seq.length]);
      current++;
    }
    hexagon.push(beam);
    if (row >= n - 1) {
      currentWidth--;
    } else {
      currentWidth++;
    }
  }
  return hexagon;
}

function sumBeam(beam) {
  return beam.reduce((sum, number) => sum + number);
}

// n == 4

// 0 0 
// 1 0
// 2 0
// 3 0

// 0 1 
// 1 1
// 2 1
// 3 1
// 4 0

// 0 2 
// 1 2
// 2 2
// 3 2
// 4 1
// 5 0

// 0 3 
// 1 3
// 2 3
// 3 3
// 4 2
// 5 1
// 6 0

// 1 4
// 2 4
// 3 4
// 4 3
// 5 2
// 6 1

// 2 5
// 3 5
// 4 4
// 5 3
// 6 2

// 3 6
// 4 5
// 5 4
// 6 3


// n === 2

// 0 0
// 1 0

// 0 1
// 1 1
// 2 0

// 1 2
// 2 1

// function getForwardDiagonalBeams(n, hexagon) {
//   const height = 2 * n - 1;
//   const diagonals = [];
//   let currentCol = 0;
//   let currentLength = n;
//   let start = 0;
//   for (let diagonal = 0; diagonal < height; diagonal++) {
//     const forwardDiagonal = [];
//     let innerCol = currentCol;

//     // TODO: i <= currentlength sometimes....
//     for (let i = start; i < currentLength; i++) {
//       if (i >= n) {
//         innerCol -= 1;
//         forwardDiagonal.push(hexagon[i][innerCol]);
//       } else {
//         forwardDiagonal.push(hexagon[i][currentCol]);
//       }
//     }
//     if (diagonal >= Math.floor(height / 2)) {
//       currentLength--;
//       start++;
//     } else {
//       currentLength++;
//     }
//     currentCol++;
//     diagonals.push(forwardDiagonal);
//   }
//   return diagonals;
// }

function padForwardDiagonalHexagon(n, hexagon) {
  const height = 2 * n - 1;
  const paddedHexagon = hexagon.map((row, i) => {
    const numZeroes = height - row.length;
    if (i + 1 > Math.floor(height / 2)) {
      return Array(numZeroes).fill(0).concat(row);
    }
    return row.concat(Array(numZeroes).fill(0));
  });
  return paddedHexagon;
}

function getForwardDiagonalBeamSums(n, hexagon) {
  const height = 2 * n - 1;
  const paddedHexagon = padForwardDiagonalHexagon(n, hexagon);
  const diagonalBeamSums = [];
  for (let colNum = 0; colNum < height; colNum++) {
    let diagonalSum = 0;
    for (let rowNum = 0; rowNum < height; rowNum++) {
      diagonalSum += paddedHexagon[rowNum][colNum];
    }
    diagonalBeamSums.push(diagonalSum);
  }
  return diagonalBeamSums;
}

function padBackwardDiagonalHexagon(n, hexagon) {
  const height = 2 * n - 1;
  const paddedHexagon = hexagon.map((row, i) => {
    const numZeroes = height - row.length;
    if (i + 1 > Math.floor(height / 2)) {
      return row.concat(Array(numZeroes).fill(0));
    }
    return Array(numZeroes).fill(0).concat(row);
  });
  return paddedHexagon;
}

function getBackwardDiagonalBeamSums(n, hexagon) {
  const height = 2 * n - 1;
  const paddedHexagon = padBackwardDiagonalHexagon(n, hexagon);
  const diagonalBeamSums = [];
  for (let colNum = 0; colNum < height; colNum++) {
    let diagonalSum = 0;
    for (let rowNum = 0; rowNum < height; rowNum++) {
      diagonalSum += paddedHexagon[rowNum][colNum];
    }
    diagonalBeamSums.push(diagonalSum);
  }
  return diagonalBeamSums;
}


// THANK YOU: to the person that suggested to implement with padding... https://i.imgur.com/PGGhhyY.png
function maxHexagonBeam(n, seq) {
  const hexagon = createHexagon(n, seq);
  const horizontalSums = hexagon.map(sumBeam);
  const forwardDiagonalSums = getForwardDiagonalBeamSums(n, hexagon);
  const backwardsDiagonalSums = getBackwardDiagonalBeamSums(n, hexagon);
  return Math.max(...horizontalSums.concat(forwardDiagonalSums).concat(backwardsDiagonalSums));
}

module.exports = {
  maxHexagonBeam,
  sumBeam,
  createHexagon,
  getForwardDiagonalBeamSums,
  padForwardDiagonalHexagon,
  getBackwardDiagonalBeamSums,
};
