function SeriesSum(n) {
  // place to store the overall sum
  let sum = 0;
  // a place to store the current denominator - initialized to 1
  let currentDenominator = 1;
  // iterate up to n
  for (let i = 0; i < n; i++) {
    // add 1 divided by the current demoninator to the sum
    sum +=  1 / currentDenominator;
    // increase the denominator by 3
    currentDenominator += 3;
  }
  
  // return the sum rounded to 2 decimal places
  return sum.toFixed(2);
}

function SeriesSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum +=  1 / ((i - 1) * 3 + 1);
  }
  return sum.toFixed(2);
}

function SeriesSum(n) {
  return Array.from({ length: n }).reduce((sum, _, i) => {
    return sum + (1 / (i * 3 + 1));
  }, 0).toFixed(2);
}

function SeriesSum(n, round = true) {
  let result;
  if (n === 0) {
    result = 0;
  } else {
    result = SeriesSum(n - 1, false) + (1 / ((n - 1) * 3 + 1));
  }
  return round ? result.toFixed(2) : result;
}

function SeriesSum(n, round = true) {
  if (n === 0) {
    return '0.00';
  } else {
    const result = (1 / ((n - 1) * 3 + 1)) + +SeriesSum(n - 1, false);
    return round ? result.toFixed(2) : result;
  }
}

console.log(SeriesSum(1), '1.00');
console.log(SeriesSum(2), '1.25');
console.log(SeriesSum(3), '1.39');
console.log(SeriesSum(4), '1.49');