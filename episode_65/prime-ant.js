function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

function primeAnt(n){
  let p = 0;
  let A = Array.from({ length: n }, (_, i) => i + 2);
  let count = 0;
  while (count < n) {
    if (isPrime(A[p])) {
      p += 1;    
    } else {
      let q = 2;
      while (A[p] % q !== 0) {
        q++;
      }
      A[p] = A[p] / q;
      A[p - 1] = A[p - 1] + q;
      p--;
    }
    count++;
  }
  return p;
}

let testc = [
  [28, 10],
  [11, 5],
  [19, 5],
  [2, 2],
  [12, 4],
  [29, 9],
  [46, 8],
];

for (let [n, s] of testc) {
  let soln = s;
  console.log(primeAnt(n), soln);
}