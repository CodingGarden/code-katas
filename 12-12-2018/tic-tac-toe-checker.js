function isSolved(board) {
  const isWinner = (player, set) => set.every(cell => cell === player);
  // check if either diagonal is solved by x or o
  const backDiagonal = [board[0][0], board[1][1], board[2][2]];
  if (isWinner(1, backDiagonal)) {
    return 1;
  } else if (isWinner(2, backDiagonal)) {
    return 2;
  }

  const forwardDiagonal = [board[2][0], board[1][1], board[0][2]];
  if (isWinner(1, forwardDiagonal)) {
    return 1;
  } else if (isWinner(2, forwardDiagonal)) {
    return 2;
  }

  // check if each row is solved by x or o
  for (let i = 0; i < 3; i++) {
    const row = board[i];
    if (isWinner(1, row)) {
      return 1;
    } else if (isWinner(2, row)) {
      return 2;
    }
  }
  // check if each column is solved by x or o
  for (let i = 0; i < 3; i++) {
    const col = [board[0][i], board[1][i], board[2][i]];
    if (isWinner(1, col)) {
      return 1;
    } else if (isWinner(2, col)) {
      return 2;
    }
  }

  // if none of the above true and there are 0s anywhere, not solved
  if (board.some(row => row.some(cell => cell === 0))) {
    return -1;
  }
  // else draw
  return 0;
}

function isSolved(board) {
  const isWinner = (player, set) => set.every(cell => cell === player);
  // check if each row is solved by x or o
  const sets = [];
  for (let i = 0; i < 3; i++) {
    const row = board[i];
    sets.push(row);
    const col = [board[0][i], board[1][i], board[2][i]];
    sets.push(col);
  }
  // check if either diagonal is solved by x or o
  const backDiagonal = [board[0][0], board[1][1], board[2][2]];
  sets.push(backDiagonal);
  const forwardDiagonal = [board[2][0], board[1][1], board[0][2]];
  sets.push(forwardDiagonal);

  for (let i = 0; i < sets.length; i++) {
    const set = sets[i];
    if (isWinner(1, set)) return 1;
    if (isWinner(2, set)) return 2;
  }

  // if none of the above true and there are 0s anywhere, not solved
  if (board.some(row => row.some(cell => cell === 0))) {
    return -1;
  }
  // else draw
  return 0;
}

// You can use Test.expect(boolean, [optional] string) to test your code
console.log(isSolved([
  [0,0,1],
  [1,2,2],
  [2,1,1]
]));
