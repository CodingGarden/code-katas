function deleteNth(arr, n){
  // a place to keep track of the numbers we have seen (including count)
  const counts = {};
  // a place to store the result - initialized to empty
  const result = [];

  // iterate over arr
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    // if we have not seen the current number n times
    if (!counts[currentNumber] || counts[currentNumber] < n) {
      // push into result array
      result.push(currentNumber);
      // increase count
      counts[currentNumber] = counts[currentNumber] || 0;
      counts[currentNumber]++;
    }
  }
  
  // return result array
  return result;
}

function deleteNth(arr, n){
  const counts = {};
  const result = [];

  arr.forEach(currentNumber => {
    if (!counts[currentNumber] || counts[currentNumber] < n) {
      result.push(currentNumber);
      counts[currentNumber] = counts[currentNumber] || 0;
      counts[currentNumber]++;
    }
  });
  
  return result;
}

function deleteNth(arr, n){
  const counts = {};
  return arr.filter(currentNumber => {
    if (!counts[currentNumber] || counts[currentNumber] < n) {
      counts[currentNumber] = (counts[currentNumber] || 0) + 1;
      return true;
    }
    return false;
  });
}

function deleteNth(arr, n){
  const counts = {};
  return arr.filter(currentNumber => {
    if (!counts[currentNumber] || counts[currentNumber] < n) {
      counts[currentNumber] = (counts[currentNumber] || 0) + 1;
      return true;
    }
    return false;
  });
}

function deleteNth(arr, n){
  return arr.reduce(({ counts, result }, currentNumber) => {
    if (!counts[currentNumber] || counts[currentNumber] < n) {
      counts[currentNumber] = (counts[currentNumber] || 0) + 1;
      result.push(currentNumber);
    }
    return {
      counts,
      result
    };
  }, {
    counts: {},
    result: []
  }).result;
}

function deleteNth(arr, n){
  return arr.reduce((state, currentNumber) => {
    if (!state.counts[currentNumber] || state.counts[currentNumber] < n) {
      state.counts[currentNumber] = (state.counts[currentNumber] || 0) + 1;
      state.result.push(currentNumber);
    }
    return state;
  }, {
    counts: {},
    result: []
  }).result;
}

// Thanks dan levy!
function deleteNth(array, limit) {
  return array.reduce((state, item) => {
    if (!state.counts[item]) state.counts[item] = 0;
    state.counts[item] ++;
    if (state.counts[item] <= limit) {
      state.array = state.array.concat([item]);
    }

    return state;
  }, {counts: {}, array: []})
}

// Thanks alca!
​let deleteNth = (arr, t = 1) => arr.reduce((p, n) => (p[0][n] = (p[0][n] || 0) + 1, p[0][n] <= t && p[1].push(n), p), [ {}, [] ])[1];

console.log(deleteNth([1, 1, 1, 1], 2), [1, 1]);
console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
