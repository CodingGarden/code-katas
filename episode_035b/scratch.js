// let a = 10;

// function add(b) {
//   return a + b;
// }

// console.log(add(10));

// a = 20;

// console.log(add(10));

// function add(a, b) {
//   return a + b;
// }

// console.log(20);
// console.log(20);
// console.log(add(10, 10));




function emojify(name) {
  return name + ' 🌱 '; 
}

console.log(emojify('cj'));
console.log(emojify('cj'));
console.log(emojify('cj'));


// const add = (a, b) => a + b;

const createAdder = a => b => a + b;

const compute = operation => operation(10)(10);

console.log(compute(createAdder));
