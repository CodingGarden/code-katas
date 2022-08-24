function beeramid(bonus, price) {
  let totalBeers = Math.floor(bonus / price);
  let level = 1;
  while (totalBeers > 0) {
    totalBeers -= Math.pow(level, 2);
    if (totalBeers < Math.pow(level + 1, 2)) {
      return level;
    }
    level += 1;
  }
  return level - 1;
}

console.log(beeramid(9, 2), 1);
console.log(beeramid(10, 2), 2);
console.log(beeramid(11, 2), 2);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(454, 5), 5);
console.log(beeramid(455, 5), 6);
console.log(beeramid(4, 4), 1);
console.log(beeramid(3, 4), 0);
console.log(beeramid(0, 4), 0);
console.log(beeramid(-1, 4), 0);