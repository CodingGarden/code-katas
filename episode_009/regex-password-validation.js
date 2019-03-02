function validate(password) {
  // At least six characters long
  const longEnough = /.{6,}/.test(password);
  console.log(longEnough);
  // contains a lowercase letter
  const hasLowercase = /[a-z]/.test(password);
  console.log(hasLowercase);
  // contains an uppercase letter
  const hasUpperCase = /[A-Z]/.test(password);
  console.log(hasUpperCase);
  // contains a number
  const hasNumber = /\d/.test(password);
  console.log(hasNumber);
  return longEnough && hasLowercase && hasUpperCase && hasNumber;
}

function validate(password) {
  return /^(?=\w{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]*$/g.test(password);
}

console.log(validate('djI38D55'), 'djI38D55 - Expected true');
console.log(validate('a2.d412'), 'a2.d412 - Expected false');
console.log(validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
console.log(validate('!fdjn345'), '!fdjn345 - Expected false');
console.log(validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
console.log(validate('123'), '123 - Expected false');
console.log(validate('abc'), 'abc - Expected false');
console.log(validate('Password123'), 'Password123 - Expected true');
console.log(validate('dsF43'), 'should be false');
