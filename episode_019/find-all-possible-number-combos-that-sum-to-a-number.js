function combos(n){
  const cache = {};
  if (n === 0) return [[]];
  if (n === 1) return [[1]];
  const result = [[n]];
  
  let currentN = n - 1;
  while (currentN >= 1) {
    combos(currentN)
      .forEach(arr => {
        const sub = [n - currentN, ...arr].sort();
        if (!cache[sub.toString()]) {
          result.push(sub);
          cache[sub.toString()] = true;
        }
      });
    currentN -= 1;
  }  

  return result;
}

console.log(combos(3));
console.log(combos(4));
console.log(combos(10));
