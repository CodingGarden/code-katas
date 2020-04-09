const operators = {
  '+': true,
  '-': true,
  '*': true,
  '/': true,
};

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function samePrecedence(operator1, operator2) {
  return operator1 === operator2 ||
    (operator1 === '*' && operator2 === '/') ||
    (operator1 === '/' && operator2 === '*') ||
    (operator1 === '+' && operator2 === '-') ||
    (operator1 === '-' && operator2 === '+');
}

function higherPrecedence(operator1, operator2) {
  return (operator1 === '*' || operator1 === '/') &&
    (operator2 === '+' || operator2 === '-');
}

function higherOrSamePresendence(operator1, operator2) {
  return samePrecedence(operator1, operator2) || higherPrecedence(operator1, operator2);
}

class Compiler {
  compile(program) {
    return this.pass3(this.pass2(this.pass1(program)));
  }

  tokenize(program) {
    // Turn a program string into an array of tokens.  Each token
    // is either '[', ']', '(', ')', '+', '-', '*', '/', a variable
    // name or a number (as a string)
    // eslint-disable-next-line
    var regex = /\s*([-+*/\(\)\[\]]|[A-Za-z]+|[0-9]+)\s*/g;
    // eslint-disable-next-line
    return program.replace(regex, ":$1").substring(1).split(':').map(function (tok) {
      // eslint-disable-next-line
      return isNaN(tok) ? tok : tok | 0;
    });
  }

  tokensToAST(args, tokens) {
    const outputStack = [];
    const operatorStack = [];
    const pushOperation = () => {
      // TODO: error checking
      const op = operatorStack.shift();
      const b = outputStack.pop();
      const a = outputStack.pop();
      outputStack.push({
        op,
        a,
        b,
      });
    };
    for (let i = 0; i < tokens.length; i += 1) {
      const token = tokens[i];
      if (!(token in operators) && token !== '(' && token !== ')') {
        if (!isNaN(token)) {
          outputStack.push({
            op: 'imm',
            n: token,
          });
        } else {
          // TODO: error checking
          outputStack.push({
            op: 'arg',
            n: args[token],
          })
        }
      } else if (token in operators) {
        while (operatorStack.length && higherOrSamePresendence(operatorStack[0], token)) {
          pushOperation();
        }
        operatorStack.unshift(token);
      } else if (token === '(') {
        operatorStack.unshift(token);
      } else if (token === ')') {
        while (operatorStack.length && operatorStack[0] !== '(') {
          pushOperation();
        }
        if (operatorStack[0] === '(') {
          operatorStack.shift();
        }
      }
    }
    while (operatorStack.length) {
      pushOperation();
    }
    return outputStack.pop();
  }

  parseArguments(tokens) {
    const errorMessage = 'Invalid argument list.';
    const args = {};
    let argCount = 0;
    for (let i = 0; i < tokens.length; i += 1) {
      const token = tokens[i];
      if (i === 0 && token !== '[') {
        throw new Error(errorMessage);
      } else if (i > 0) {
        if (token === ']') {
          return {
            args,
            i,
          };
        }
        args[token] = argCount;
        argCount += 1;
      }
    }
    throw new Error(errorMessage);
  }

  pass1(program) {
    const tokens = this.tokenize(program);
    const {
      args,
      i
    } = this.parseArguments(tokens);
    return this.tokensToAST(args, tokens.slice(i + 1));
  }

  pass2(ast) {
    function reduceAST(fApp, fVal, node) {
      switch (node.op) {
        case 'arg': case 'imm':
          return fVal(node.op, node.n);
        case '+': case '-': case '*': case '/':
          return fApp(node.op, reduceAST(fApp, fVal, node.a), reduceAST(fApp, fVal, node.b));
        default: throw new Error('Invalid Node');
      }
    }
    return reduceAST((op, a, b) => {
      if (a.op === 'imm' && b.op === 'imm') {
        return {
          'op': 'imm',
          'n': operations[op](a.n, b.n),
        };
      } else {
        return {
          'op': op,
          'a': a,
          'b': b
        };
      }
    }, (op, n) => {
      return {
        'op': op,
        'n': n
      };
    }, ast);
  }

  pass3(ast) {
    // return assembly instructions
  }
}

module.exports = Compiler;