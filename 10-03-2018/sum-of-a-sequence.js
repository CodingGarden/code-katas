function sequenceSum(begin, end, step) {
  if (begin > end) {
    return 0;
  }
  // place to store the sum - initialized to begin value
  let sum = begin;
  // current sequence value - initialized to begin value
  let currentValue = begin;

  // while current sequence value is not equal to end
  while (currentValue < end) {
    // increment the sequence value by step
    currentValue += step;

    if (currentValue > end) {
      break;
    }
    // add the new sequence value to sum
    sum += currentValue;
  }
  
  return sum;
};

function sequenceSum(begin, end, step) {
  if (begin > end) {
    return 0;
  }
  let sum = 0;
  let currentValue = begin;

  while (currentValue <= end) {
    sum += currentValue;
    currentValue += step;
  }
  
  return sum;
};

function sequenceSum(begin, end, step) {
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

// arithmetic sum formula: n/2*(first term + last term) where n = number of terms
function sequenceSum(begin, end, step) {
  if (begin > end) return 0;
  const count = Math.floor((end - begin) / step) + 1;
  return count * (begin + step * (count - 1) / 2);
}

function sequenceSum(begin, end, step) {
  const length = Math.floor((end - begin) / step) + 1;
  return Array
    .from({ length }, (_, i) => begin + (step * i))
    .reduce((sum, val) => sum + val, 0);
};

function sequenceSum(begin, end, step) {
  const length = Math.floor((end - begin) / step) + 1;
  return Array.from({ length })
    .reduce((sum, _, i) => sum + (begin + (step * i)), 0);
};

function sequenceSum(begin, end, step) {
  const length = Math.floor((end - begin) / step) + 1;
  return Array.from({ length }, function(_, i) {
    return begin + (step * i);
  }).reduce(function(sum, val) {
    return sum + val;
  }, 0);
};

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
console.log(sequenceSum(5, 1, 3), 0);