// TODO: rename this file to match slug

function isDivisible(n, x, y) {
  const isDivisibleByX = n % x === 0;
  const isDivisibleByY = n % y === 0;
  return isDivisibleByX && isDivisibleByY;
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0;
}

function isDivisible(n, x, y) {
  const isDivisibleByX = n % x === 0;
  const isDivisibleByY = n % y === 0;
  if (isDivisibleByX && isDivisibleByY) {
    return true;
  } else {
    return false;
  }
}

function isDivisible(n, x, y) {
  const isDivisibleByX = n % x === 0;
  const isDivisibleByY = n % y === 0;
  if (isDivisibleByX && isDivisibleByY) {
    return true;
  }
  return false;
}

function isDivisible(n, x, y) {
  const isDivisibleByX = n % x === 0;
  const isDivisibleByY = n % y === 0;
  if (isDivisibleByX && isDivisibleByY) return true;
  return false;
}

function isDivisible(n, x, y) {
  const isDivisibleByX = n % x === 0;
  const isDivisibleByY = n % y === 0;
  if (isDivisibleByX && isDivisibleByY) return true;
  else return false;
}

function isDivisible(n, x, y) {
  const remainderOfDivisionByX = n % x;
  const remainderOfDivisionByY = n % y;
  if (!remainderOfDivisionByX && !remainderOfDivisionByY) return true;
  return false;
}

console.log(isDivisible(3,3,4), false);
console.log(isDivisible(12,3,4), true);
console.log(isDivisible(8,3,4), false);
console.log(isDivisible(48,3,4), true);