function orderWeight(input) {
  const sumDigits = num => num.toString().split('').reduce((sum, digit) => sum + +digit, 0);
  // split the input on spaces
  // return the sorted array joined on spaces
  return input.split(' ').sort((a, b) => {
    // find weight of a and b
    const weightA = sumDigits(a);
    const weightB = sumDigits(b);
    console.log(weightA);
    
    // if weight of a is less than b 
    if (weightA < weightB) {
      return -1;
    }
    // if weight of a is greater than b 
    if (weightA > weightB) {
      return 1;
    }
    // if they are equal
      // return the comparison of the actual numbers
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  }).join(' ');
}

function orderWeight(input) {
  const sumDigits = num => Array.prototype.reduce.call(num.toString(), (sum, digit) => sum + +digit, 0);
  return input.split(' ').sort((a, b) => {
    const weightA = sumDigits(a);
    const weightB = sumDigits(b);
    console.log(weightA);
    return weightA < weightB ? -1 : weightA > weightB ? 1 : a < b ? -1 : a > b ? 1 : 0;
  }).join(' ')
}

console.log(orderWeight("103 123 4444 99 2000") == "2000 103 123 4444 99")
const result2 = orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");
const result3 = "11 11 2000 10003 22 123 1234000 44444444 9999";
console.log(result2)
console.log(result3)