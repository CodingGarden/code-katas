// const cache = {};
// function fibonacci(n) {
//   if (cache[n]) return cache[n];

//   if (n == 0 || n == 1) {
//     return n;
//   }
//   const n1 = fibonacci(n - 1);
//   cache[n - 1] = n1;
//   const n2 = fibonacci(n - 2);
//   cache[n - 2] = n2;
//   return n1 + n2;
// }

// const cache = {
//   0: 0,
//   1: 1
// };
// function fibonacci(n) {
//   if (n in cache) return cache[n];
//   cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
//   return cache[n];
// }

// function fibonacci(n, cache = { 0: 0, 1: 1 }) {
//   if (n in cache) return cache[n];
//   cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
//   return cache[n];
// }

// function fibonacci(n, cache) {
//   cache = cache || { 0: 0, 1: 1 };
//   if (n in cache) return cache[n];
//   cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
//   return cache[n];
// }

// const fibonacci = (() => {
//   const cache = { 0: 0, 1: 1 };
//   return (n) => {
//     if (n in cache) return cache[n];
//     cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     return cache[n];
//   };
// })();

const fibonacci = ((cache = [0, 1]) => ((n) => n in cache ? cache[n] : cache[n] = fibonacci(n - 1) + fibonacci(n - 2)))();

console.log(fibonacci(70), 190392490709135);
console.log(fibonacci(60), 1548008755920);
console.log(fibonacci(50), 12586269025);