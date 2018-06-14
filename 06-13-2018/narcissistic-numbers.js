function narcissistic( value ) {
  const length = Math.floor(Math.log10(Math.abs(value))) + 1;  
  // a place to store the sum
  let sum = 0;
  let digits = value;
  // while current value is greater than 0
  while (digits > 0) {
    // grab the last digit of the number
    const digit = digits % 10;
    // raise that digit to the length power, add the value to the sum
    sum += Math.pow(digit, length);
    // remove that digit from the value
    digits = Math.floor(digits / 10);
  }

  return sum == value;
}

function narcissistic( value ) {
  return [...value.toString()].reduce((sum, digit, i, {length}) => {
    return sum + Math.pow(digit, length);
  }, 0) == value;
}

console.log( narcissistic( 7 ), '7 is narcissistic' );
console.log( narcissistic( 23 ), '23 is not narcissistic' );
console.log( narcissistic( 153 ), '153 is narcissistic' );
console.log( narcissistic( 1634 ), '1634 is narcissistic' );
console.log( narcissistic( 371 ), '371 is narcissistic' );