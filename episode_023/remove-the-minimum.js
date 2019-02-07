function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  // a place to store the smallest index, initialized to 0
  let smallestIndex = 0;
  // iterate over the array skipping the first value
  for (let i = 1; i < numbers.length; i++) {
    const smallestValue = numbers[smallestIndex];
    const currentValue = numbers[i];
    // if current value is less than, current smallest value
    if (currentValue < smallestValue) {
      // set smallest index to current index
      smallestIndex = i;
    }
  }

  // a place to store the new numbers
  const newNumbers = [];
  // iterate over numbers
  for (let i = 0; i < numbers.length; i++) {
    // if the current index is not the smallest index
    if (i !== smallestIndex) {
      const currentNumber = numbers[i];
      // add number to new numbers array
      newNumbers.push(currentNumber);
    }
  }

  // return the new numbers array
  return newNumbers;
}

function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  // a place to store the smallest index, initialized to 0
  let smallestIndex = 0;
  // iterate over the array skipping the first value
  for (let i = 1; i < numbers.length; i++) {
    const smallestValue = numbers[smallestIndex];
    const currentValue = numbers[i];
    // if current value is less than, current smallest value
    if (currentValue < smallestValue) {
      // set smallest index to current index
      smallestIndex = i;
    }
  }

  const newNumbers = numbers.slice();
  newNumbers.splice(smallestIndex, 1);
  return newNumbers;
}

function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  // a place to store the smallest index, initialized to 0
  let smallestIndex = 0;
  // iterate over the array skipping the first value
  for (let i = 1; i < numbers.length; i++) {
    const smallestValue = numbers[smallestIndex];
    const currentValue = numbers[i];
    // if current value is less than, current smallest value
    if (currentValue < smallestValue) {
      // set smallest index to current index
      smallestIndex = i;
    }
  }

  const newNumbers = [...numbers];
  newNumbers.splice(smallestIndex, 1);
  return newNumbers;
}

function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const smallestIndex = numbers
    .reduce((smallestIndex, currentValue, i) => {
      const smallestValue = numbers[smallestIndex];
      if (currentValue < smallestValue) {
        smallestIndex = i;
      }
      return smallestIndex;
    }, 0);

  const newNumbers = [...numbers];
  newNumbers.splice(smallestIndex, 1);
  return newNumbers;
}

function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const smallestIndex = numbers
    .reduce((smallestIndex, currentValue, i) => {
      const smallestValue = numbers[smallestIndex];
      if (currentValue < smallestValue) {
        smallestIndex = i;
      }
      return smallestIndex;
    }, 0);
  return numbers.filter((_, i) => i !== smallestIndex);
}

// not great for big arrays...
function removeSmallest(numbers) {
  return !numbers.length ? [] : numbers.filter((_, i) => i !== numbers
    .reduce((smallestIndex, currentValue, i) => {
      const smallestValue = numbers[smallestIndex];
      if (currentValue < smallestValue) {
        smallestIndex = i;
      }
      return smallestIndex;
    }, 0));
}

// not great for big arrays...
function removeSmallest(numbers) {
  return !numbers.length ? [] : numbers.filter((_, i) => i !== numbers
    .reduce((smallestIndex, currentValue, i) =>
      currentValue < numbers[smallestIndex] ? i : smallestIndex
    , 0));
}

// not great for big arrays...
function removeSmallest(n) {
  return !n.length ? [] : n.filter((_, i) => i !== n.reduce((s, c, i) => c < n[s] ? i : s, 0));
}

// Andrew Lane!
​function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const a = [...numbers];
  a.splice(numbers.indexOf(numbers.sort()[0]), 1);
  return a;
}

// Alca
​function removeSmallest(list, sI = 0) {
  return !list.length ? [] : list
    .reduce((p, n, i) => (n < list[sI] && (sI = i), p), list)
    .filter((_, i) => i !== sI);
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([]), []);