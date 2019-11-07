function maps(numbers){
  // a place to store the doubled values
  const doubled = [];

  // iterate over the array of numbers
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // double the current value and add to the doubled values array
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  // return the doubled array
  return doubled;
}

function maps(numbers){
  const doubled = [];

  for (const number of numbers) {
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  return doubled;
}

function maps(numbers){
  const doubled = [];

  for (const i in numbers) {
    const number = numbers[i];
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  return doubled;
}

function maps(numbers){
  const doubled = [];

  numbers.forEach((number) => {
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  });

  return doubled;
}

function maps(numbers) {
  const doubled = numbers.map((number) => {
    const doubledNumber = number * 2;
    return doubledNumber;
  });
  return doubled;
}

function maps(numbers) {
  return numbers.map((number) => {
    const doubledNumber = number * 2;
    return doubledNumber;
  });
}

function maps(numbers) {
  return numbers.map((number) => {
    return number * 2;
  });
}

function maps(numbers) {
  return numbers.map((number) => number * 2);
}

function maps(numbers) {
  return numbers.map(number => number * 2);
}

function maps(n) {
  return n.map(n=>n*2);
}

function maps(numbers) {
  return 2 * numbers;
}










console.log(
  maps([1, 2, 3]),
  [2, 4, 6]
);
console.log(
  maps([4, 1, 1, 1, 4]),
  [8, 2, 2, 2, 8]
); 
console.log(
  maps([2, 2, 2, 2, 2, 2]),
  [4, 4, 4, 4, 4, 4]
); 