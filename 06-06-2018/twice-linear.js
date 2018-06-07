// THIS ONE TIMES OUT!!

function dblLinear(n) {
  // a place to store the sequence
  const sequence = [1]; // start the sequence with 1
  const seen = {};
  // a place to keep track of the length, set to 0
  let length = 0;
  // a place to keep track of current x index, set to 0
  let xIndex = 0;

  // while length is less than n
  while(length < n) {
    const x = sequence[xIndex];
    // calculate y given the current x
    const y = 2 * x + 1;
    // insert y into the sequence in sorted order
    if (!seen[y]) {
      for (var i = sequence.length - 1; i >= 0; i--) {
        if (sequence[i] < y) {
          break;
        }
      }
      sequence.splice(i + 1, 0, y);
      seen[y] = true;
    }
    // calcuate z given the current x
    const z = 3 * x + 1;
    // insert z into the sequence in sorted order
    sequence.push(z);
    seen[z] = true;
    // increase length
    length++;
    // increase x index
    xIndex++;
  }
  // return sequence at n
  return sequence[n];
}

// DOES NOT TIME OUT - We are using less memory...
function dblLinear(n) {
  // a place to store the sequence
  const sequence = [1]; // start the sequence with 1
  const seen = {};
  // a place to keep track of the length, set to 0
  let length = 0;
  let last = 0;

  // while length is less than n
  while (length < n) {
    const x = sequence.shift(); // remove first value from array
    delete seen[x]; // remove from seen
    // calculate y given the current x
    const y = 2 * x + 1;
    // insert y into the sequence in sorted order
    if (!seen[y]) {
      for (var i = last; i < sequence.length; i++) {
        if (sequence[i] > y) {
          break;
        }
      }
      sequence.splice(i, 0, y);
      seen[y] = true;
      last = i;
    }
    // calcuate z given the current x
    const z = 3 * x + 1;
    // insert z into the sequence in sorted order
    sequence.push(z);
    seen[z] = true;
    // increase length
    length++;
  }
  return sequence[0]; // return the first value in the array
}

console.log(dblLinear(10), 22);
console.log(dblLinear(20), 57);
console.log(dblLinear(30), 91);
console.log(dblLinear(50), 175);
console.log(dblLinear(100), 447);