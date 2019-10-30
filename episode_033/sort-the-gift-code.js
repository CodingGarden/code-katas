// function sortGiftCode(code){
//   // split the code into an array
//   // call built in sort method on array
//   // join the array together to form a string
//   return code
//     .split('')
//     .sort()
//     .join('');
// }

function quicksort(array, low, hi) {
  low = low || 0;
  hi = hi === undefined ? array.length - 1 : hi;
  if (low < hi) {
    const p = partition(array, low, hi);
    quicksort(array, low, p - 1);
    quicksort(array, p + 1, hi);
  }
  return array;
}

function partition(array, low, hi) {
  const pivot = array[hi];
  let i = low;
  for (let j = low; j < hi; j++) {
    if (array[j] < pivot) {
      swap(array, i, j);
      i++;
    }
  }
  swap(array, i, hi);
  return i;
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(quicksort([3, 2, -11, 1, 5, 99, 100]));

function sortGiftCode(code){
  return quicksort(code.split()).join('');
}

console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');