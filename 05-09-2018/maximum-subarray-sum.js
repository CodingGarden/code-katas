var maxSequence = function (arr) {
  // initialize maxSum to 0
  let maxSum = arr[0];

  // iterate from 0 to end of array - i
  for (let i = 0; i < arr.length; i++) {
    // iterate from current index to end of array - j
    for (let j = i; j < arr.length; j++) {
      // place to store sum of current subarray
      let currentSum = 0;
      // iterate from i to j
      for (let k = i; k < j; k++) {
        // sum all numbers
        currentSum += arr[k];
      }
      // if currentSum is greater than maxSum
      if (currentSum > maxSum) {
        // set MaxSum
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

// single iteration

var maxSequence = function (arr) {
  // place keep track of currentSum // initialize to 0
  let currentSum = 0;
  // place to keep track of maxSum // initialize to 0
  let maxSum = 0;

  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    // set currentSum to max of currentSum + currentNumber and 0
    currentSum = Math.max(currentSum + currentNumber, 0);
    // set maxSum to max of currentSum and maxSum
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}