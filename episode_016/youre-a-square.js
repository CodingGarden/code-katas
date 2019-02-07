function isSquare(n) {
  if (n === 0) return true;
  // iterate up to n
  for (let i = 0; i < n; i++) {
    // square the current iteration value
    // const valueSquared = Math.pow(i, 2);
    const valueSquared = i ** 2;
    // if the result is equal to n
    if (valueSquared === n) {
      return true
    }
  }
  return false;
}

function isSquare(n) {
  if (n === 0 || n === 1) return true;
  for (let i = 0; i <= n / 2; i++) {
    const valueSquared = i ** 2;
    if (valueSquared === n) {
      return true
    }
  }
  return false;
}

function isSquare(n) {
  if (n === 0 || n === 1) return true;
  for (let i = 0; i <= n / 2; i++) {
    const valueSquared = i ** 2;
    if (valueSquared === n) {
      return true
    } else if (valueSquared > n) {
      return false;
    }
  }
  return false;
}

function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

function isSquare(n) {
  return Number.isInteger(n ** (1/2));
}

console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
console.log(isSquare( 3), false, "3 is not a square number");
console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");