function whoIsNext(names, r){
  // this fails for really large numbers...
  // a place to store the current drink/count
  let count = 1;
  // iterate up to r
  while (count < r) {
    // take first value in array and push it twice to the back of the array
    // remove the first value
    const currentPerson = names.shift();
    names.push(currentPerson, currentPerson);
    // increment drink
    count++;
  }
  // return first person in the array
  return names[0];
}

function whoIsNext(names, n){
  while (n > names.length) {
    n -= names.length - 1;
    n *= 0.5;
    n = Math.floor(n);
  }
  return names[n - 1];
}

const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
console.log(whoIsNext(names, 1), "Sheldon");
console.log(whoIsNext(names, 20));
console.log(whoIsNext(names, 52), "Penny");
console.log(whoIsNext(names, 7230702951), "Leonard");