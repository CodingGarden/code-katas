function minMax(arr){
  // sort the array  
  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
    // return the first and last values from the array
  const min = arr[0];
  const max = arr[arr.length - 1];
  return [min, max];
}

function minMax(arr){
  // sort the array  
  arr.sort((a, b) => a - b);
    // return the first and last values from the array
  const min = arr[0];
  const max = arr[arr.length - 1];
  return [min, max];
}

function minMax(arr) {
  if (arr.length === 1) return [arr[0], arr[0]];
  let min;
  let max;
  // min variable set to the lowest of the first 2 values in the array
  // max variable set to the highest of the first 2 values in the array
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    max = arr[0];
    min = arr[1];
  }
  
  // iterate up from the 3rd value to the end of the array
  for (let i = 2; i < arr.length; i++) {
    const currentValue = arr[i];
    // if the current value is less than the current min
    if (currentValue < min) {
      // set the min to be the current value
      min = currentValue;
    }
    
    if (currentValue > max) {
      // else if the current value is greater than the current max
      // set the max to be the current value
      max = currentValue;
    }
  }

  // return max and min
  return [min, max];
}

function minMax(arr) {
  const min = Math.min(...arr);
  // const min = Math.min.apply(null, arr);
  const max = Math.max(...arr);
  // const max = Math.max.apply(null, arr);

  return [min, max];
}

function minMax(arr) {
  if (arr.length === 1) return [arr[0], arr[0]];

  return arr.reduce(([min, max], value) => {
    if (value < min) {
      min = value;
    }
    
    if (value > max) {
      max = value;
    }
    return [min, max];
  }, [Infinity, -Infinity]);
}

console.log(minMax([1,2,3,4,5]), [1,5]);
console.log(minMax([2334454,5]), [5, 2334454]);
console.log(minMax([1]), [1, 1])
console.log(minMax([100, 1]), [1, 100])