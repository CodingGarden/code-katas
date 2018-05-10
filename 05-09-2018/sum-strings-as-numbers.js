function sumStrings(a, b) {
  //   return (Number(a) + Number(b)).toString(); this only works for smaller numbers
  if (a.length < b.length) {
    while (a.length != b.length) {
      a = '0' + a;
    }
  } else if (b.length < a.length) {
    while (a.length != b.length) {
      b = '0' + b;
    }
  }

  let sum = '';
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const aNum = +a[i];
    const bNum = +b[i];
    const innerSum = aNum + bNum + carry;

    let placeNum = innerSum;
    if (innerSum > 9) {
      placeNum = innerSum % 10;
      carry = Math.floor(innerSum / 10);
    } else {
      carry = '';
    }
    sum = placeNum + sum;
  }
  sum = carry + sum;

  while (sum[0] == '0') {
    sum = sum.slice(1);
  }

  return sum;
}

console.log(sumStrings('999999999999999999999999999999999999999999999999999', '1'));
