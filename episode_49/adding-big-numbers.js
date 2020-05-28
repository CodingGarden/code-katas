function add(a, b) {
  const length = Math.max(a.length, b.length);
  a = a.padStart(length, '0');
  b = b.padStart(length, '0');
  const aDigits = [...a];
  const bDigits = [...b];  
  const resultDigits = [];
  let carry = 0;
  for (let i = length - 1; i >= 0; i -= 1) {
    const result = +aDigits[i] +  +bDigits[i] + carry;
    if (result < 10) {
      resultDigits.unshift(result);
      carry = 0;
    } else {
      resultDigits.unshift(result % 10);
      carry = 1;
    }
  }
  if (carry) {
    resultDigits.unshift(carry);
  }
  return resultDigits.join('');
}

console.log(
  add('1', '10'),
  '11'
);

console.log(
  add('1', '1'),
  '2'
);
console.log(
  add('123', '456'),
  '579'
);
console.log(
  add('888', '222'),
  '1110'
);
console.log(
  add('1372', '69'),
  '1441'
);
console.log(
  add('12', '456'),
  '468'
);
console.log(
  add('101', '100'),
  '201'
);
console.log(
  add('63829983432984289347293874', '90938498237058927340892374089'),
  '91002328220491911630239667963'
);