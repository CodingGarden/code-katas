// Math.floor = function () {
//   return 10;
// };

// Math.random = function() {
//   return 1;
// };

// const guess = 10;

// const lucky_number = Math.floor(Math.random() * 100 + 1);
// console.log(guess, lucky_number);

Object.prototype.toString = function() {
  return JSON.stringify(this);
};

const person = {
  name: 'CJ'
};

const wat = {
  number: 42
};

wat[person.toString()] = 'hello';

console.log(wat);

// console.log(person.toString());

String.prototype.yell = function() {
  return this.toUpperCase() + '!!!!';
};

const name = 'cj';

console.log(name.yell());

