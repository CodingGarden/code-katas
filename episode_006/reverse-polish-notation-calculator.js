// for each token in the postfix expression:
//   if token is an operator:
//     operand_2 ← pop from the stack
//     operand_1 ← pop from the stack
//     result ← evaluate token with operand_1 and operand_2
//     push result back onto the stack
//   else if token is an operand:
//     push token onto the stack
// result ← pop from the stack

// 5 1 2 + 4 * + 3 -

function calc(expr) {
  const input = expr.split(' ');
  const stack = [];

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  for (let i = 0; i < input.length; i++) {
    const token = input[i];
    if (operations[token]) {
      const rightValue = stack.pop();
      const leftValue = stack.pop();
      const result = operations[token](+leftValue, +rightValue);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return +stack.pop();
}

function calc(expr) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  return +expr.split(' ').reduce((stack, token) => {
    if (operations[token]) {
      const rightValue = stack.pop();
      const leftValue = stack.pop();
      const result = operations[token](+leftValue, +rightValue);
      stack.push(result);
    } else {
      stack.push(token);
    }
    return stack;
  }, []).pop();
}

console.log(calc('5 1 2 + 4 * + 3 -'), 14);
