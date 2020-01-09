function digPow(n, p){
  let sum = 0;
  const strNum = n.toString();
  for (let i = 0; i < strNum.length; i++) {
    const digit = +strNum[i];
    const powResult = digit ** p;
    sum += powResult;
    p++;
  }
  if (sum % n === 0) {
    return sum / n;
  }
  return -1;
}

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(695, 2), 2);
console.log(digPow(46288, 3), 51);