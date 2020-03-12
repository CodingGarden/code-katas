module.exports = {
  op: '/',
  a: {
    op: '-',
    a: {
      op: '+',
      a: {
        op: '*',
        a: {
          op: '*',
          a: {
            op: 'imm',
            n: 2,
          },
          b: {
            op: 'imm',
            n: 3,
          },
        },
        b: {
          op: 'arg',
          n: 0,
        },
      },
      b: {
        op: '*',
        a: {
          op: 'imm',
          n: 5,
        },
        b: {
          op: 'arg',
          n: 1,
        },
      },
    },
    b: {
      op: '*',
      a: {
        op: 'imm',
        n: 3,
      },
      b: {
        op: 'arg',
        n: 2,
      },
    },
  },
  b: {
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
  },
};
