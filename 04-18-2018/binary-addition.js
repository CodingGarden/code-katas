function binaryAdd(a, b) {
  const sum = a + b;

  return toBinary(sum);
}

function toBinary(sum) {
  if (sum === 0) {
    return '0';
  }

  let binary = '';
  while (sum > 0) {
    const remainder = sum % 2;
    binary = remainder + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}

console.log(binaryAdd(1, 0)); // 111
