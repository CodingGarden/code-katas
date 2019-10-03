Array.prototype.square = function() {
  // a place to store the squared values
  const squared = [];
  // iterate over the array (this)
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    // square the current element
    // const result = element * element;
    const result = element ** 2;
    // const result = Math.pow(element, 2);
    // insert the squared element into the squared values array
    squared.push(result);
  }
  // return the squared values
  return squared;
};

Array.prototype.square = function() {
  return this.map(element => element ** 2);
};

Array.prototype.cube = function() {
  return this.map(element => element ** 3);
};

Array.prototype.sum = function() {
  // a place to store the sum - initialized to 0
  let result = 0;
  // iterate over the array (this)
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    // add the current element to the sum
    result += element;
  }
  // return the sum
  return result;
};

Array.prototype.sum = function() {
  let result = 0;
  this.forEach(element => {
    result += element;
  });
  return result;
};

Array.prototype.sum = function() {
  return this.reduce((result, element) => {
    result += element;
    return result;
  }, 0);
};

Array.prototype.sum = function() {
  return this
    .reduce((result, element) => result + element, 0);
};

Array.prototype.average = function() {
  return this.sum() / this.length;
};

Array.prototype.even = function() {
  // a place to store the evens
  const evens = [];
  // iterate over the array (this)
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    // check if current element is even
      // if it is - add to evens array
    if (element % 2 === 0) {
      evens.push(element);
    }
  }
  // return the evens array
  return evens;
};

Array.prototype.even = function() {
  return this
    .filter(element => element % 2 === 0);
};

Array.prototype.odd = function() {
  return this
    .filter(element => element % 2 !== 0);
};

Array.prototype.odd = function() {
  return this
    .filter(element => element % 2);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15);
console.log(numbers.average(), 3);
console.log(numbers.even(), [2, 4]);
console.log(numbers.odd(), [1, 3, 5]);