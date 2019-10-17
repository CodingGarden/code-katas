module.exports = function (wallaby) {
  return {
    files: [
      '*.js'
    ],
    tests: [
      'test/*test.js'
    ],
    env: {
      type: 'node'
    }
    // https://wallabyjs.com/docs/integration/node.html
  };
};