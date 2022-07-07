function maxMultiple(divisor, bound){
  // iterate from the bound down to divisor
  for (let i = bound; i >= divisor; i -= 1) {
    // if the current number is divisible by the divisor, return the current number
    if (i % divisor === 0) return i;
  }
}

function maxMultiple(divisor, bound){
  return bound - bound % divisor;
}

console.log(maxMultiple(2,7),6);
console.log(maxMultiple(3,10),9);
console.log(maxMultiple(7,17),14);
console.log(maxMultiple(10,50),50);
console.log(maxMultiple(37,200),185);
console.log(maxMultiple(7,100),98);