function binaryArrayToNumber (arr) {
  // place to store the sum
  let sum = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];    
    // take 2 raised to the power arr.length - 1 - i
    // multiply by current value in array
    // add to sum
    const power = arr.length - 1 - i;
    const powerOf2 = (2 ** power);
    sum += powerOf2 * value;
  }
  // return the sum
  return sum;
}

function binaryArrayToNumber (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];    
    sum += (2 ** (arr.length - 1 - i)) * value;
  }
  return sum;
}

function binaryArrayToNumber (arr) {
  let sum = 0;
  arr.forEach((value, i) => {
    sum += (2 ** (arr.length - 1 - i)) * value;    
  });
  return sum;
}

function binaryArrayToNumber (arr) {
  return arr.reduce((sum, value, i) => {
    return sum + (2 ** (arr.length - 1 - i)) * value;    
  }, 0);
}

function binaryArrayToNumber (arr) {
  return arr.reduce((sum, value, i) => sum + (2 ** (arr.length - 1 - i)) * value, 0);
}

function binaryArrayToNumber (arr) {
  return arr
    .map((value, i) => (2 ** (arr.length - 1 - i)) * value)
    .reduce((sum, value) => sum + value, 0);
}

function binaryArrayToNumber (arr) {
  return arr.length ? (2 ** (arr.length - 1)) * arr[0] + binaryArrayToNumber(arr.slice(1)) : 0;
}

function binaryArrayToNumber (arr) {
  if (arr.length) {
    return (2 ** (arr.length - 1)) * arr[0] + binaryArrayToNumber(arr.slice(1));
  }
  return 0;
}

// skely!
function binaryArrayToNumber(arr) { return parseInt(arr.join(''),2); }

function binaryArrayToNumber (arr) {
  return arr.reverse().reduce((sum, value, i) => sum + (2 ** i) * value, 0);
}

function binaryArrayToNumber (arr) {
  return arr.reverse().reduceRight((sum, value, i) => sum + (2 ** i) * value, 0);
}

// 0001
// 2^3 * 0 + 2^2 * 0 + 2^1 * 0 + 2^0 * 1
// 0 + 0 + 0 + 1
// 1

console.log(binaryArrayToNumber([0,0,0,1]), 1);
console.log(binaryArrayToNumber([0,0,1,0]), 2);
console.log(binaryArrayToNumber([1,1,1,1]), 15);
console.log(binaryArrayToNumber([0,1,1,0]), 6);