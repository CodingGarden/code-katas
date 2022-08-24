function multiplicationTable(size) {
  const table = [];
  for (let col = 1; col <= size; col++) {
    const rowArray = []; 
    for (let row = 1; row <= size; row++) {
      rowArray.push(col * row);
    }
    table.push(rowArray);
  }
  return table;
}

function multiplicationTable(length) {
  return Array.from({ length }, (_, col) => {
    return Array.from({ length }, (_, row) => {
      return (col + 1) * (row + 1);
    });
  });
}

console.log(
  multiplicationTable(3),
  [[1,2,3], [2,4,6], [3,6,9]]
);

