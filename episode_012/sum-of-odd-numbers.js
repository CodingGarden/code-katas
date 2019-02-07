function rowSumOddNumbers(n) {
  // a place to keep track of how many odds go in the current row
    // initialized to 1
  let rowNum = 1;
  // place to keep track of the current row (an array)
  let row = [];
  let counter = 1;

  // iterate up from 1 until the current row number is equal to n
  while (rowNum <= n) {
    // if the current number is odd
    if (counter % 2 != 0) {
      // push into the current row
      row.push(counter);
      
      // check to see if the length of the current row is equal to what it should be
      // if it is
      if (row.length == rowNum) {
        // increment the rowNum
        // clear the row array
        if (rowNum != n) {
          row = [];
        }
        rowNum++;
      }
    }

    counter++;
    // increment the count
  }
  // sum the row array
  console.log(row);
  
  // return the sum
  return row.reduce((sum, n) => sum + n);
}

function rowSumOddNumbers(n) {
  let rowNum = 1;
  let row = [];
  let counter = 1;

  while (rowNum <= n) {
    if (counter % 2 != 0) {
      row.push(counter);
      if (row.length == rowNum) {
        if (rowNum != n) {
          row = [];
        }
        rowNum++;
      }
    }
    counter++;
  }
  
  return row.reduce((sum, n) => sum + n);
}

function rowSumOddNumbers(n) {
  let rowNum = 1;
  let row = [];
  let sum = 0;
  let counter = 1;

  while (rowNum <= n) {
    row.push(counter);
    sum += counter;
    if (row.length == rowNum) {
      if (rowNum != n) {
        row = [];
        sum = 0;
      }
      rowNum++;
    }
    counter+=2;
  }
  
  return sum;
}

function rowSumOddNumbers(n) {
  let sum = 0;
  let current = n * (n - 1) + 1;

  for (let i = 0; i < n; i++) {
    sum += current;
    current += 2;
  }
  
  return sum;
}

function rowSumOddNumbers(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += n * (n - 1) + (1 + 2*i);
  }
  
  return sum;
}

function rowSumOddNumbers(n) {
  let sum = 0;
  
  Array.from({ length: n }, (_, i) => {
    sum += n * (n - 1) + (1 + 2*i);
  });
  
  return sum;
}

function rowSumOddNumbers(n) {
  return Array.from({ length: n })
    .reduce((sum, _, i) => sum + n * (n - 1) + (1 + 2*i), 0);
}

function rowSumOddNumbers(n) {
  return [...Array(n).keys()]
    .reduce((sum, i) => sum + n * (n - 1) + (1 + 2*i), 0);
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(42), 74088);