function findUniq(arr) {
  // a place to store the counts of the numbers
  const counts = {};
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    // increment the count of the current number in the counts object
    counts[number] = counts[number] || 0;
    counts[number]++;
    // if there are 2 numbers in the counts object
    const entries = Object.keys(counts);
    if (entries.length === 2) {
      const [a, b] = entries;
      if (counts[a] === 1 && counts[b] > 1) {
        return a;
      } else if (counts[b] === 1 && counts[a] > 1) {
        return b;
      }
      // return the one with only 1 count
    }
  }
}

// function difference(setA, setB) {
//   let _difference = new Set(setA);
//   for (let elem of setB) {
//     _difference.delete(elem);
//   }
//   return _difference;
// }

function findUniq(array) {
  if (array[0] !== array[1]) {
    if (array[0] === array[2]) {
      return array[1];
    } else {
      return array[0];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== array[i]) {
      return array[i + 1];
    }
  }
}

function findUniq(array) {
  array.sort((a, b) => a - b);
  if (array[0] !== array[1]) {
    return array[0];
  } else {
    return array[array.length - 1];
  }
}


console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
