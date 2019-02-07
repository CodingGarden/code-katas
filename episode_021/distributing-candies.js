function distribute(m, n) {
  if (n <= 0) return [];
  // need an n length array to store the candies filled with zeros
  // const candies = Array.from({ length: n }).fill(0);
  // const candies = Array.from({ length: n }, () => 0);
  const candies = Array(n).fill(0);
  if (m <= 0) return candies;
  const fillCandies = () => {
    // iterate up to number of children (n)
    for (let i = 0; i < candies.length; i++) {
      // increment the current value at the current index by 1
      candies[i]++;
      // decrement the number of candies left
      m--;
      // if number of candies is zero // break
      if (m === 0) break;
    }
  };
  while(m > 0) {
    fillCandies();
  }
  // if we reach the end of the array and still have candies left, do it again
  return candies;
}

function distribute(m, n) {
  if (n <= 0) return [];
  const candies = Array(n).fill(0);
  if (m <= 0) return candies;
  while(m > 0) {
    for (let i = 0; i < candies.length; i++) {
      candies[i]++;
      m--;
      if (m === 0) break;
    }
  }
  return candies;
}

function distribute(m, n) {
  if (n <= 0) return [];
  const candies = Array(n).fill(0);
  if (m <= 0) return candies;

  const minCandies = Math.floor(m / n);
  return candies.map((_, i) => {
    return i < m % n ? minCandies + 1 : minCandies;
  });
}

function distribute(m, n) {
  return n <= 0 ? [] : m <= 0 ? Array(n).fill(0) : Array.from({ length: n }, (_, i) => i < m % n ? Math.floor(m / n) + 1 : Math.floor(m / n));
}

console.log(distribute(-5, 10).sort((a,b)=>a-b), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 0, 10).sort((a,b)=>a-b), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 5, 10).sort((a,b)=>a-b), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
console.log(distribute(10, 10).sort((a,b)=>a-b), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(distribute(15, 10).sort((a,b)=>a-b), [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
console.log(distribute(-5,  0), []);
console.log(distribute( 0,  0), []);
console.log(distribute( 5,  0), []);
console.log(distribute(10,  0), []);
console.log(distribute(15,  0), []);
console.log(distribute(-5, -5), []);
console.log(distribute( 0, -5), []);
console.log(distribute( 5, -5), []);
console.log(distribute(10, -5), []);
console.log(distribute(15, -5), []);