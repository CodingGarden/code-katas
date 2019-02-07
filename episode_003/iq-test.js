// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  numbers = numbers.split(' ');
  // keep track of even count, and the last index we saw of even
  const even = {
     count: 0,
     lastIndex: -1
  };
  // keep track of odd count, and the last index we saw of odd
  const odd = {
     count: 0,
     lastIndex: -1
  };

  // iterate over numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // if even, increment even count and store index
    if (currentNumber % 2 == 0) {
      even.count++;
      even.lastIndex = i + 1;
    } else {
      // if odd, increment odd count and store index
      odd.count++;
      odd.lastIndex = i + 1;
    }
  }

  // if even count is 1
  if (even.count == 1) {
    // return the last even index we saw
    return even.lastIndex;
  }
  // else if the odd count is 1
  else {
    // return the last odd index we saw
    return odd.lastIndex;
  }
}

console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);
