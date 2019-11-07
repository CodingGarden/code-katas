function findNeedle(haystack) {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
}

function findNeedle(haystack) {
  // a place to store the index
  let index;

  // iterate over the haystack
  for (let i = 0; i < haystack.length; i++) {
    const currentValue = haystack[i];
    // if the current value is equal to 'needle'
    if (currentValue === 'needle') {
      // store the current index in the index variable
      index = i;
      // break out of the for loop
      break;
    }
  }

  return `found the needle at position ${index}`;
}

function indexOf(array, value) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue === value) {
      index = i;
      break;
    }
  }

  return index;
}

function findNeedle(haystack) {
  const index = indexOf(haystack, 'needle');
  return `found the needle at position ${index}`;
}

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    const currentValue = haystack[i];
    if (currentValue === 'needle') {
      return `found the needle at position ${i}`;
    }
  }
}

function findNeedle(haystack) {
  const index = haystack.findIndex(value => value === 'needle');
  return `found the needle at position ${index}`;
}

function findNeedle(haystack) {
  let index;
  let leftPointer = 0;
  let rightPointer = haystack.length - 1;

  while (leftPointer <= rightPointer) {
    const leftValue = haystack[leftPointer];
    if (leftValue === 'needle') {
      index = leftPointer;
      break;
    }
    const rightValue = haystack[rightPointer];
    if (rightValue === 'needle') {
      index = rightPointer;
      break;
    }
    leftPointer++;
    rightPointer--;
  }

  return `found the needle at position ${index}`;
}

function findNeedle(haystack) {
  let index;
  let leftPointer = 0;
  let rightPointer = haystack.length - 1;

  while (leftPointer <= rightPointer) {
    const leftValue = haystack[leftPointer++];
    if (leftValue === 'needle') {
      index = leftPointer - 1;
      break;
    }
    const rightValue = haystack[rightPointer--];
    if (rightValue === 'needle') {
      index = rightPointer + 1;
      break;
    }
  }

  return `found the needle at position ${index}`;
}

function findNeedle(haystack) {
  let index;
  let leftPointer = 0;
  let rightPointer = haystack.length - 1;

  while (leftPointer <= rightPointer) {
    const leftValue = haystack[++leftPointer];
    if (leftValue === 'needle') {
      index = leftPointer;
      break;
    }
    const rightValue = haystack[--rightPointer];
    if (rightValue === 'needle') {
      index = rightPointer;
      break;
    }
  }

  return `found the needle at position ${index}`;
}

// J B
function findNeedle(arr, i = 0) {
  if(arr[i] === 'needle') return i;
  return findNeedle(arr, ++i);
}

function findNeedle(haystack) {
  let index;
  
  haystack.forEach((currentValue, i) => {
    if (currentValue === 'needle') {
      index = i;
    }
  });
  
  return `found the needle at position ${index}`;
}

var haystack_0 = ['needle', '3', '123124234', undefined, 'world', 'hay', 2, '3', true, false];
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

console.log(
  findNeedle(haystack_0),
  'found the needle at position 0'
);

console.log(
  findNeedle(haystack_1),
  'found the needle at position 3'
);
console.log(
  findNeedle(haystack_2),
  'found the needle at position 5'
); 
console.log(
  findNeedle(haystack_3),
  'found the needle at position 30'
);

// Pranjal
// Use two pointer approach to solve this problem (i.e. assign two pointer one for left side and one for right side and move them + check for needle)
// Also you can try recursion to solve this

// J B
// function recursiveNeedle(arr,i=0) { if(arr[i]==="needle")return i; return recursiveNeedle(arr,i++); }

// PRANJAL AGNIHOTRI
// Hii CJ can you please help me with this problem, just a idea will help. You can google leetcode "maximum-length-of-a-concatenated-string-with-unique-characters". Please

// Spacie
// could you make a haystack pun and implement it using only while and pop?