// '+' = add
// '-' = subtract
// '*' = multiply
// '$' = divide

// (division => multiplication => subtraction => addition)

const operations = {
  '$': (a, b) => a / b,
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};

function operate(parts, operator, fn) {
  for (let i = 0; i < parts.length; i++) {
    const token = parts[i];
    if (token === operator) {
      const result = fn(parts[i - 1], parts[i + 1]);
      parts.splice(i - 1, 3, result);
      i = i - 1;
    }
  }
}

function calculate(route) {
  const parts = route
    .split('')
    .reduce(({ parts, currentNumber }, token, i, tokens) => {
      if (operations[token]) {
        parts = [...parts, +currentNumber, token];
        currentNumber = '';
      } else {
        currentNumber += token;
      }
      if (i === tokens.length - 1) {
        return [...parts, +currentNumber];
      }
      return { parts, currentNumber };
    }, {
      parts: [],
      currentNumber: ''
    });

  Object
    .keys(operations)
    .forEach(operation => {
      operate(parts, operation, operations[operation]);
    });

  return isNaN(parts[0]) ? '400: Bad request' : parts[0];
}

console.log(calculate('5*5*5'), 125);

console.log(calculate('1'), 1);
console.log(calculate('1.1'), 1.1);

console.log(calculate('1+1'), 2);
console.log(calculate('1-1'), 0);
console.log(calculate('2$2$2'), 1);
console.log(calculate('2*2'), 4);


console.log(calculate('1.1+1.9'), 3);
console.log(calculate('9$4'), 2.25);
console.log(calculate('1.5*3'), 4.5);
console.log(calculate('5-43.2'), -38.2);


console.log(calculate('5+5+5+5'), 20);
console.log(calculate('5-5-5-5'), -10);
console.log(calculate('5*5*5*5'), 625);
console.log(calculate('5$5$5$5'), 0.04);


console.log(calculate('1+1-1'), 1);
console.log(calculate('5*6$2+5-10'), 10);

console.log(calculate('1*1*1*1*1*1$1$1$1$1+1-1+9-1'), 9);
console.log(calculate('80 + 5 - 5 + 1'), 81);



console.log(calculate('5*6$2&5-10'), '400: Bad request');
console.log(calculate('5/10'), '400: Bad request');
console.log(calculate('p'), '400: Bad request');
console.log(calculate('9^9'), '400: Bad request');