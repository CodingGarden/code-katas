// function f(number) {
//   const zeros = number.toString().match(/(0+)/g);
//   const lengths = zeros.map(z => z.length);
//   const longest = Math.max(...lengths);
//   return longest;
// }

const f=(n)=>Math.max(...(''+n).match(/0+/g).map(z=>z.length))
// const f=(n)=>Math.max.call(null, (''+n).match(/0+/g).map(z=>z.length))

//alca
const f=n=>(''+n).match(/0+/g).sort().pop().length

console.log(f(1002000), 3);
console.log(f(10002030000), 4);
console.log(f(10), 1);
