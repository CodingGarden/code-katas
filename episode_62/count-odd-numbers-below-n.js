function oddCount(n){
  // a place to store the odd count initialized to zero
  let oddCount = 0;
  // iterate from 1 up to n
  for (let i = 1; i < n; i += 1) {
    // if the current number is odd
    if (i % 2 === 1) {
      // increment the odd count
      oddCount += 1;
    }
  }
  // return the odd count
  return oddCount;
}

function oddCount(n){
  let oddCount = 0;
  for (let i = 1; i < n; i += 1) {
    if (i % 2 === 1) {
      oddCount += 1;
    }
  }
  return oddCount;
}

function oddCount(n) {
  return Math.floor(n / 2);
}

console.log(oddCount(15), 7);
console.log(oddCount(15023), 7511);
