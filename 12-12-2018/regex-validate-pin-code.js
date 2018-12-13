function validatePIN(pin) {
  const is4Digits = /^\d\d\d\d$/.test(pin);
  const is6Digits = /^\d\d\d\d\d\d$/.test(pin);
  return is4Digits || is6Digits;
}

function validatePIN(pin) {
  return /^\d\d\d\d$|^\d\d\d\d\d\d$/.test(pin);
}

function validatePIN(pin) {
  return /^(\d\d\d\d|\d\d\d\d\d\d)$/.test(pin);
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN('1'),false);
console.log(validatePIN('12'),false);
console.log(validatePIN('123'),false);
console.log(validatePIN('12345'),false);
console.log(validatePIN('1234567'),false);
console.log(validatePIN('-1234'),false);
console.log(validatePIN('1.234'),false);
console.log(validatePIN('-1.234'),false);
console.log(validatePIN('00000000'),false);
console.log(validatePIN('1234'),true);
console.log(validatePIN('0000'),true);
console.log(validatePIN('1111'),true);
console.log(validatePIN('123456'),true);
console.log(validatePIN('098765'),true);
console.log(validatePIN('000000'),true);
console.log(validatePIN('123456'),true);
console.log(validatePIN('090909'),true);
console.log(validatePIN(12345),true);