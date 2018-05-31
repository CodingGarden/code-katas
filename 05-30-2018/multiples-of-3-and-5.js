// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  // place to store the sum
  let sum = 0;
  // iterate down from the number minus 1
  for (let i = number - 1;  i > 0; i--) {
    // if the number is divisible by 5
    if (i % 5 === 0) {
      // add it to sum
      sum += i;
    } else if (i % 3 === 0) {
      // add it to sum
      sum += i;
    }
  }

  return sum;
}

function solution(number) {
  // place to store the sum
  let sum = 0;
  // iterate down from the number minus 1
  for (let i = number - 1; i > 0; i--) {
    // if the number is divisible by 5
    if (i % 5 === 0 || i % 3 === 0) {
      // add it to sum
      sum += i;
    }
  }

  return sum;
}

function solution(number) {
  return new Array(number).fill(0).reduce((sum, z, i) => {
    if (i % 5 === 0 || i % 3 === 0) {
      return sum + i;
    }
    return sum;
  }, 0);
}

function solution(number) {
  return Array.from({ length: number }, (_, i) => i).reduce((sum, i) => {
    if (i % 5 === 0 || i % 3 === 0) {
      return sum + i;
    }
    return sum;
  }, 0);
}

function solution(number) {
  return Array.from({ length: number }, (_, i) => i).reduce((sum, i) => i % 5 === 0 || i % 3 === 0 ? sum + i : sum, 0);
}

function solution(number) {
  let sum = 0;
  Array.from({ length: number }, (_, i) => {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  });
  return sum;
}

console.log(solution(10), 23);
