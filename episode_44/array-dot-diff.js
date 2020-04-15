// 1. solve it with nested for loops
function arrayDiff(a, b) {
  // a place to store the result array - initialized to empty
  const result = [];
  // iterate over array a
  for (let i = 0; i < a.length; i++) {
    let shouldInclude = true;
    // iterate over b and see if the current value is in b
    for (let j = 0; j < b.length; j++) {
      // if it is, break out of this for loop
      if (a[i] === b[j]) {
        shouldInclude = false;
        break;
      }
    }
    if (shouldInclude) {
      // push the current value into the result array
      result.push(a[i]);
    }
  }
  return result;
}

// 2. solve it with filter and includes or find
function arrayDiff(a, b) {
  return a.filter(value => !b.includes(value));
}

// 3. solve it with a filter and a pre-computed set
// O(n + m)
function arrayDiff(a, b) {
  const removeValues = new Set(b);
  return a.filter(value => !removeValues.has(value));
}

// return a.reduce((acc, cur) => b.includes(cur) ? acc : [...acc, cur], [])

console.log(arrayDiff([], [4,5]), []);
console.log(arrayDiff([3,4], [3]), [4]);
console.log(arrayDiff([1,8,2], []), [1,8,2]);