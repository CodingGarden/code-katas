function lazyChain(arg, invocations = []) {
  return {
    invoke(name, ...args) {
      return lazyChain(arg, [...invocations, { name, args }]);
    },
    value() {
      return invocations.reduce((finalValue, invocation) => {
        return finalValue[invocation.name](...invocation.args);
      }, arg);
    },
  };
}

console.log(
  lazyChain('hello')
    .invoke('toUpperCase')
    .invoke('split', '')
    .value(), ['H', 'E', 'L', 'L', 'O']
);

console.log(lazyChain([1, 2, 3])
  .invoke('map', x => x * x)
  .invoke('reverse')
  .value(), [9, 4, 1]);