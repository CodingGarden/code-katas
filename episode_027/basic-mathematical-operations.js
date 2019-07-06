function basicOp(operation, value1, value2) {
  // object to store the operation functions
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  // get the operation function for the given operation
  const operationFn = operations[operation];

  // return the result of the operation
  return operationFn(value1, value2);
}

console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);