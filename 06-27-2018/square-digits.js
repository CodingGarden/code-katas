function squareDigits(num){
  // a place to store the squared numbers
  let squaredNumbers = '';
  // iterate over each digit in the number
  while(num > 0) {
    let digit = num % 10;
    // square the digit
    let squaredDigit = Math.pow(digit, 2);
    // prepend to where we are storing the squared numbers
    squaredNumbers = squaredDigit + squaredNumbers;
    
    num = Math.floor(num / 10);
  }
  // return the squared numbers as a number
  return Number(squaredNumbers);
}

function squareDigits(num){
  return +num.toString().split('').map(digit => Math.pow(digit, 2)).join('');
}

function squareDigits(num) {
  return +num.toString().split('').reduce((squaredNumbers, digit) => {
    return squaredNumbers + Math.pow(digit, 2);
  }, '');
}

function squareDigits(num) {
  return +Array.prototype.reduce.call(num.toString(), (squaredNumbers, digit) => {
    return squaredNumbers + Math.pow(digit, 2);
  }, '');
}

console.log(squareDigits(9119), 811181)


console.log("WHY IS THIS NOT WORKING??")
