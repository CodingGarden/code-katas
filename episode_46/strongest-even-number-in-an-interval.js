// potentially slow...
// function getStrongness(value) {
//   let strongness = 0;
//   while (value % 2 === 0) {
//     value /= 2; // TODO: use docs speedup
//     strongness++;
//   }
//   return strongness;
// }

// function getStrongness(value) {
//   let strongness = 0;
//   while ((value & 1) === 0) {
//     value = value>>1; // TODO: use docs speedup
//     strongness++;
//   }
//   return strongness;
// }

// function strongestEven(n, m){
//   const largest = {
//     value: 0,
//     strongness: 0,
//   };
//   const calculated = {}
//   for (let value = n; value <= m; value++) {
//     let strongness;
//     if (calculated[value / 2]) {
//       strongness = calculated[value / 2] + 1;
//       calculated[value] = strongness;
//     } else {
//       strongness = getStrongness(value);
//       calculated[value] = strongness;
//     }
//     if (strongness > largest.strongness) {
//       largest.value = value;
//       largest.strongness = strongness;
//     }
//   }
//   return largest.value;
// }

// const lookup = [
//   32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17,
//   0, 25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18
// ];

// function getStrongness(value) {
//   return lookup[(value & -value) % 37];
// }

// const clz = Math.clz32;
// function getStrongness(integer){ // count trailing zeros
//     // 1. fill in all the higher bits after the first one
//     integer |= integer << 16;
//     integer |= integer << 8;
//     integer |= integer << 4;
//     integer |= integer << 2;
//     integer |= integer << 1;
//     // 2. Now, inversing the bits reveals the lowest bits
//     return 32 - clz(~integer) |0; // `|0` ensures integer coercion
// }

// function strongestEven(n, m){
//   const largest = {
//     value: 0,
//     strongness: 0,
//   };
//   let start = n % 2 === 0 ? n : n + 1;
//   for (let value = start; value <= m; value+=2) {
//     let strongness = getStrongness(value);
//     if (strongness > largest.strongness) {
//       largest.value = value;
//       largest.strongness = strongness;
//     }
//   }
//   return largest.value;
// }

const strongestEven = (m, n) => {
  const N=BigInt(n), M=BigInt(m);
  for (let b=1n<<53n, x; b>1n; b>>=1n)
    if ((x=(N+b-1n)/b*b)<=M) return Number(x);
  return n;
}

// thanks to doc

// x>>1 divides by 2 pretty quickly

// idea: search odd multiples of powers of two from large to small that fit in the range, so multiples of 2^31 then 2^30 then 2**29 ...

// instead of searching all numbers, searching from big powers of two -> small powers of two (all odd multiples of them) will be more fasterer. There's probably some even faster number theory way using prime decomposition?

// completely unhelpful comment: fastest way to check if number is divisible by 2^N -> does the binary representation of the number in memory end in N or more zeroes (bit scan / count trailing zeroes x86 instruction) - in JS you could do toString(2) and count the zeroes but that will be slower

// just search for odd multiples of 2^31 in the range, then 2^30, then 2^29... 

// Thank you mertcane
// Consider this : The (strongness of 2N) is the (strongness of N) + 1, if you cache the strongness of N, you don't need to calculate it again


// ❣️ Thank you larry
// sorry, just coming in, isn't this just the number of trailing 0s in the binary

//and in that case, isn't it just the smallest even number >= some power of 2

// I think you can just count from powers of 2s, if not found, then the smallest even number between n and m, I think

// console.log(getStrongness(12), 2);
// console.log(getStrongness(16), 4);
// console.log(getStrongness(3), 0);


// console.log(strongestEven(1, 2), 2);
// console.log(strongestEven(5, 10), 8);
// console.log(strongestEven(48, 56), 48);
// console.log(strongestEven(129, 193), 192);

console.log(strongestEven(1180381085, 1590463313), 1342177280)
