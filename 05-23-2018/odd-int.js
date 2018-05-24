// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);

function findOdd(array) {
  // a place to store the counts
  const counts = {};

  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    // if we have not seen this number before
    if (!counts[number]) {
      // add it to counts with a value of 1
      counts[number] = 1;
    } else {
      // if we have seen this number before  
      // increment its count
      counts[number]++;
    }
  }

  // iterate over the counts
  for (const number in counts) {
    const count = counts[number];
    // if the count is odd
    if (count % 2 !== 0) {
      // return that number
      return +number;
    }
  }
}

function findOdd(array) {
  const counts = array.reduce((counts, number) => {
    counts[number] = counts[number] || 0;
    counts[number]++;
    return counts;
  }, {});

  const numbers = Object.keys(counts);
  
  const oddIndex = numbers.findIndex((number) => {
    const count = counts[number];
    return count % 2 !== 0;
  });  

  return +numbers[oddIndex];
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);