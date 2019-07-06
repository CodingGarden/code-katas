function numberToString(num) {
  return num.toString();
}

function numberToString(num) {
  return num + '';
}

function numberToString(num) {
  return new String(num).toString();
}

function numberToString(num) {
  return String(num);
}

function numberToString(num) {
  return `${num}`;
}

function numberToString(num) {
  return [num].join();
}

console.log(numberToString(67) === '67');
console.log(numberToString(123) === '123');
console.log(numberToString(99) === '99');
