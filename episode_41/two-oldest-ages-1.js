function twoOldestAges(ages) {
  // sort the array lowest to highest
  ages.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (b < a) {
      return 1;
    }
    return 0;
  });
  // return the last 2 values in the array
  const result = [];
  result.push(ages[ages.length - 2]);
  result.push(ages[ages.length - 1]);
  return result;
}

function twoOldestAges(ages) {
  // sort the array lowest to highest
  ages.sort((a, b) => a - b);
  // return the last 2 values in the array
  return ages.slice(ages.length - 2);
}

function twoOldestAges(ages) {
  return ages
    .sort((a, b) => a - b)
    .slice(ages.length - 2);
}

function twoOldestAges(ages) {
  return ages
    .sort((a, b) => a - b)
    .slice(-2);
}

// pure
function twoOldestAges(ages) {
  return ages
    .slice()
    .sort((a, b) => a - b)
    .slice(-2);
}

// pure
function twoOldestAges(ages) {
  return [...ages]
    .sort((a, b) => a - b)
    .slice(-2);
}

// Alca!
const result = (ages => {
  const oldest = Math.max(...ages);
  const set = new Set(ages);
  set.delete(oldest);
  return [ Math.max(...set), oldest ]; }
)([ 1, 2, 10, 8 ])
console.log(result);

function twoOldestAges(ages) {
  let secondLargest = ages[0];
  let largest = ages[1];

  if (secondLargest > largest) {
    [secondLargest, largest] = [largest, secondLargest];
  }

  for (let i = 2; i < ages.length; i++) {
    const value = ages[i];
    if (value > secondLargest) {
      secondLargest = value;
      if (secondLargest > largest) {
        [secondLargest, largest] = [largest, secondLargest];
      }
    }
  }

  return [secondLargest, largest];
}

const input = [2, 1, 10, 8];
console.log(
  twoOldestAges(input),
  [8, 10]
);
