function displayBoard(board, width){
  let result = '';
  let currentCol = 0;
  for (let i = 0; i < board.length; i++) {
    const element = board[i];
    result += ` ${element} ${currentCol === (width - 1) ? '\n' : '|'}`;
    currentCol++;
    if (currentCol == width) {
      currentCol = 0;
      if (i !== board.length - 1) {
        result += '-'.repeat((width * 3) + (width - 1)) + '\n';
      }
    }
  }
  result = result.slice(0, -1);
  return result;
}

// console.log(displayBoard(['O', 'X', 'X', 'O'], 2));
// console.log(
//   displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' '],3)
// );

console.log(
  displayBoard(['O', 'X', 'X', 'O'], 2),
  ' O | X \n-------\n X | O '
);
console.log(displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' '],3) == ' O | X |   \n-----------\n   | X |   \n-----------\n X | O |   ');
// console.log(displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' ', 'O'],5),' O | X |   |   | X \n-------------------\n   | X | O |   | O ');
// console.log(displayBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' ', 'O'],2),' O | X \n-------\n   |   \n-------\n X |   \n-------\n X | O \n-------\n   | O ');
// console.log(displayBoard(['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1'],6),' 1 | 2 | 3 | 4 | 5 | 1 \n-----------------------\n 2 | 3 | 4 | 5 | 1 | 2 \n-----------------------\n 3 | 4 | 5 | 1 | 2 | 3 \n-----------------------\n 4 | 5 | 1 | 2 | 3 | 4 \n-----------------------\n 5 | 1 | 2 | 3 | 4 | 5 \n-----------------------\n 1 | 2 | 3 | 4 | 5 | 1 ');