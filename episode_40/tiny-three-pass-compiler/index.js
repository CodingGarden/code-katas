const operators = {
  '+': true,
  '-': true,
  '*': true,
  '/': true,
};

function samePresedence(operator1, operator2) {
  return (operator1 === '*' && operator2 === '/')
    || (operator1 === '/' && operator2 === '*')
    || (operator1 === '+' && operator2 === '-')
    || (operator1 === '-' && operator2 === '+');
}

function higherPresedence(operator1, operator2) {
  return (operator1 === '*' || operator1 === '/')
    && (operator2 === '+' || operator2 === '-');
}

function higherOrSamePresendence(operator1, operator2) {
  return samePresedence(operator1, operator2) || higherPresedence(operator1, operator2);
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
    return program.replace(regex, ":$1").substring(1).split(':').map( function (tok) {
      // eslint-disable-next-line
      return isNaN(tok) ? tok : tok|0;
    });
  }

  tokensToRPN(tokens) {
    const outputQueue = [];
    const operatorStack = [];
    for (let i = 0; i < tokens.length; i += 1) {
      const token = tokens[i];
      if (!(token in operators) && token !== '(' && token !== ')') {
        outputQueue.push(token);
      } else if (token in operators) {
        while (operatorStack.length && higherOrSamePresendence(operatorStack[0], token)) {
          outputQueue.push(operatorStack.shift());
        }
        operatorStack.unshift(token);
      } else if (token === '(') {
        operatorStack.unshift(token);
      } else if (token === ')') {
        while (operatorStack.length && operatorStack[0] !== '(') {
          outputQueue.push(operatorStack.shift());
        }
        if (operatorStack[0] === '(') {
          operatorStack.shift();
        }
      }
    }
    return outputQueue.concat(operatorStack);
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

  getSubTokens(tokens, i) {
    const subTokens = [];
    let parenCount = 0;
    for (let j = i + 1; j < tokens.length; j += 1) {
      const subToken = tokens[j];
      if (subToken === '(') {
        parenCount += 1;
      } else if (subToken === ')') {
        if (parenCount === 0) {
          return {
            subTokens,
            nextIndex: j,
          };
        }
        parenCount -= 1;
      }
      subTokens.push(subToken);
    }
    return {
      subTokens,
      nextIndex: tokens.length,
    };
  }

  parseSubTree(tokens, args) {
    let tree = {
      op: '',
    };
    for (let i = 0; i < tokens.length; i += 1) {
      const token = tokens[i];
      if (!isNaN(token)) {
        const value = {
          op: 'imm',
          n: token,
        };
        if (!tree.op) {
          tree.a = value;
        } else {
          tree.b = value;
        }
      } else if (token in args) {
        const value = {
          op: 'arg',
          n: args[token],
        };
        if (!tree.op) {
          tree.a = value;
        } else {
          tree.b = value;
        }
      } else if (token === '(') {
        const {
          subTokens,
          nextIndex,
        } = this.getSubTokens(tokens, i);
        const value = this.parseSubTree(subTokens, args);
        if (!tree.op) {
          tree.a = value;
        } else {
          tree.b = value;
        }
        i = nextIndex;
      } else if (!tree.op) {
        tree.op = token;
      } else {
        tree = {
          op: token,
          a: tree,
        };
      }
    }
    return tree;
  }

  pass1(program) {
    const tokens = this.tokenize(program);
    const { args, i } = this.parseArguments(tokens);
    // return this.parseSubTree(tokens.slice(i + 1));
    // return un-optimized AST
  }

  pass2(ast) {
    // return AST with constant expressions reduced
  }

  pass3(ast) {
    // return assembly instructions
  }
}

module.exports = Compiler;
