function copyAndSort(array, comparison = (a, b) => a - b) {
  // const copy = array.slice();
  // const copy = [].concat(array);
  const copy = [...array];
  const ascSorted = copy.sort(comparison);
  return ascSorted;
}

function areArraysEqual(array1, array2) {
  // return array1.join() === array2.join();
  // return array1 + '' === array2 + '';
  // return JSON.stringify(array1) === JSON.stringify(array2);
  if (array1.length !== array2.length) return false;
  // for (let i = 0; i < array1.length; i++) {
  //   if (array1[i] !== array2[i]) {
  //     return false;
  //   }
  // }
  // return true;
  return array1.every((value, i) => value === array2[i]);
}

function isSortedAndHow(array) {
  // make a copy and sort the array ascending
  const ascSorted = copyAndSort(array);
  // if the input array is equal to the asc sorted array return
  if (areArraysEqual(array, ascSorted)) {
    return 'yes, ascending';
  }
  // make a copy and sort the array descending
  const descSorted = copyAndSort(array, (a, b) => b - a);
  // if the input array is equal to the desc sorted array return
  if (areArraysEqual(array, descSorted)) {
    return 'yes, descending';
  }
  return 'no';
}

function isSortedAndHow(array) {
  // set direction to asc or desc based on first 2 values in the array
  let direction = '';
  if (array[0] < array[1]) {
    direction = 'ascending';
  } else if (array[0] > array[1]) {
    direction = 'descending';
  } else {
    return isSortedAndHow(array.slice(1));
  }
  // iterate over the array after the first 2
  for (let i = 2; i < array.length; i++) {
    // if the current value is greater (if asc) continue
    if (direction === 'ascending' && array[i - 1] <= array[i]) {
      continue;
    } else if (direction === 'descending' && array[i - 1] >= array[i]) {
      continue;
    } else {
      return 'no';
    }
  }
  // return yes direction
  return `yes, ${direction}`;
}

console.log(
  isSortedAndHow([1, 2]),
  'yes, ascending'
);
console.log(
  isSortedAndHow([15, 7, 3, -8]),
  'yes, descending'
);
console.log(
  isSortedAndHow([4, 2, 30]),
  'no'
);

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b); // false
// console.log(a === b); // false

// const a = [1, 2, 3];
// const b = a;

// console.log(a == b); // true
// console.log(a === b); // true

const wat = 'okay';
const who = 'okay';
console.log(wat == who);
console.log(wat === who);
