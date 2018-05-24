function digital_root(n) {
  // while n is greater than 9
  while (n > 9) {
    // place to store the sum
    let sum = 0;
    // while n is greater than 0
    while (n > 0) {
      // mod the number by 10 to get last digit
      const lastDigit = n % 10;
      // take math.floor of number divided by 10 to drop off last digit
      n = Math.floor(n / 10);
      // add last digit to sum
      sum += lastDigit;
    }
    // re-assign sum to n
    n = sum;
  }

  return n;
}

function digital_root(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((sum, digit) => sum + +digit, 0);
  }
  return n;
}

console.log(digital_root(132189), 6);