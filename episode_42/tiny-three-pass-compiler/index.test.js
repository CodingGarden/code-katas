require('util').inspect.defaultOptions.depth = Infinity;
const Compiler = require('./index');
const pass1Result = require('./fixtures/pass1result');
const pass2Result = require('./fixtures/pass2result');

const prog = '[ x y z ] ( 2*3*x + 5*y - 3*z ) / (1 + 3 + 2*2)';
// const prog2 = '[ x y z ] ( ( ( 2 * 3 ) * x ) + ( 5 * y ) - ( 3 * z ) ) / ( ( 1 + 3 ) + ( 2 * 2 ) )';

function simulate(asm, args) {
  let r0;
  let r1;
  const stack = [];
  asm.forEach((instruct) => {
    const match = instruct.match(/(IM|AR)\s+(\d+)/) || [0, instruct, 0];
    const ins = match[1];
    const n = match[2] | 0;

    if (ins == 'IM') {
      r0 = n;
    } else if (ins == 'AR') {
      r0 = args[n];
    } else if (ins == 'SW') {
      const tmp = r0;
      r0 = r1;
      r1 = tmp;
    } else if (ins == 'PU') {
      stack.push(r0);
    } else if (ins == 'PO') {
      r0 = stack.pop();
    } else if (ins == 'AD') {
      r0 += r1;
    } else if (ins == 'SU') {
      r0 -= r1;
    } else if (ins == 'MU') {
      r0 *= r1;
    } else if (ins == 'DI') {
      r0 /= r1;
    }
  });
  return r0;
}

describe('Compiler', () => {
  it('should create an instance', () => {
    const compiler = new Compiler();
    expect(compiler).toBeDefined();
  });
  it('should parse arguments', () => {
    const compiler = new Compiler();
    expect(compiler.parseArguments(['[', 'x', 'y', 'z', ']']))
      .toEqual({
        args: {
          x: 0,
          y: 1,
          z: 2,
        },
        i: 4,
      });
  });
  it('should create a ast sub tree for immediate values', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ ] ( 21 + 21 )'))
      .toEqual({
        op: '+',
        a: {
          op: 'imm',
          n: 21,
        },
        b: {
          op: 'imm',
          n: 21,
        },
      });
  });
  it('should create a ast sub tree for an argument and an immediate value', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ a ] 21 + a')).toEqual({
      op: '+',
      a: {
        op: 'imm',
        n: 21,
      },
      b: {
        op: 'arg',
        n: 0,
      },
    });
  });
  it('should create a ast sub tree for two arguments', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ a b ] b + a')).toEqual({
      op: '+',
      a: {
        op: 'arg',
        n: 1,
      },
      b: {
        op: 'arg',
        n: 0,
      },
    });
  });
  it('should create an ast sub tree for an expression within parenthesis', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ x y ] ( x + y ) / 2')).toEqual({
      op: '/',
      a: {
        op: '+',
        a: {
          op: 'arg',
          n: 0,
        },
        b: {
          op: 'arg',
          n: 1,
        },
      },
      b: {
        op: 'imm',
        n: 2,
      },
    });
  });
  it('should handle lots of 5s', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ ] ( 5 - 5 - 5 - 5 - 5 )')).toEqual({
      op: '-',
      a: {
        op: '-',
        a: {
          op: '-',
          a: {
            op: '-',
            a: {
              op: 'imm',
              n: 5
            },
            b: {
              op: 'imm',
              n: 5
            }
          },
          b: {
            op: 'imm',
            n: 5
          }
        },
        b: {
          op: 'imm',
          n: 5
        }
      },
      b: {
        op: 'imm',
        n: 5
      }
    });
  });
  it('should create an ast sub tree for an expression within parenthesis', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ x y ] ( x + y ) / ( x + y)')).toEqual({
      op: '/',
      a: {
        op: '+',
        a: {
          op: 'arg',
          n: 0,
        },
        b: {
          op: 'arg',
          n: 1,
        },
      },
      b: {
        op: '+',
        a: {
          op: 'arg',
          n: 0,
        },
        b: {
          op: 'arg',
          n: 1,
        },
      },
    });
  });
  it('should create an ast sub tree for an expression within parenthesis', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ x y ] ( x + ( x + y ) ) / ( x + y)')).toEqual({
      op: '/',
      a: {
        op: '+',
        a: {
          op: 'arg',
          n: 0,
        },
        b: {
          op: '+',
          a: {
            op: 'arg',
            n: 0,
          },
          b: {
            op: 'arg',
            n: 1,
          },
        },
      },
      b: {
        op: '+',
        a: {
          op: 'arg',
          n: 0,
        },
        b: {
          op: 'arg',
          n: 1,
        },
      },
    });
  });
  it('should create an ast sub tree more than 1 operand', () => {
    const compiler = new Compiler();
    expect(compiler.pass1('[ ] 3 + 3 + 3')).toEqual({
      op: '+',
      a: {
        op: '+',
        a: {
          op: 'imm',
          n: 3,
        },
        b: {
          op: 'imm',
          n: 3,
        },
      },
      b: {
        op: 'imm',
        n: 3,
      },
    });
  });
  it('should create an ast for mixed operands', () => {
    const compiler = new Compiler();
    // if it's 1 + 3 + 2 * 2 * 2 * 2 that would be ((1+3) + (((2 * 2)2)2))
    const ast = compiler.pass1('[ ] ( 1 + 3 ) + ( 2 * 2 )');
    expect(ast).toEqual({
      op: '+',
      a: {
        op: '+',
        a: {
          op: 'imm',
          n: 1,
        },
        b: {
          op: 'imm',
          n: 3,
        },
      },
      b: {
        op: '*',
        a: {
          op: 'imm',
          n: 2,
        },
        b: {
          op: 'imm',
          n: 2,
        },
      },
    });
  });

  // xit('should do pass 1', () => {
  //   const compiler = new Compiler();
  //   expect(compiler.pass1(prog)).toDeepEqual(pass1Result);
  // });
  it('should do pass 2', () => {
    const compiler = new Compiler();
    expect(compiler.pass2(pass1Result)).toEqual(pass2Result);
  });
  // xit('should do pass 3', () => {
  //   const compiler = new Compiler();
  //   const pass3Result = compiler.compile(prog);
  //   expect(simulate(pass3Result, [4, 0, 0])).toBe(3);
  //   expect(simulate(pass3Result, [4, 8, 0])).toBe(8);
  //   expect(simulate(pass3Result, [4, 8, 16])).toBe(2);
  // });
});