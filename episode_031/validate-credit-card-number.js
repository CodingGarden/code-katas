function validate(n){
  // turn the number into a string
  const stringNumber = n.toString();
  // a boolean to store if we should double
    // initialized to true
  let double = true;

  // a place to store the sum
    // initialized to 0
  let sum = Number(stringNumber[stringNumber.length - 1]);  

  // iterate over each digit in the string from length - 2 to zero
  // (reverse for loop)
  for (let i = stringNumber.length - 2; i >= 0; i--) {    
    // a place to store the current digit
    let digit = Number(stringNumber[i]);
    
    // if double is true
    if (double) {      
      // double the number
      digit *= 2;
      // set double to false
      double = false;
    } else {
      double = true;
    }
    
    // If a resulting number is greater than 9
    if (digit > 9) {
      // subtracting 9 from it
      digit -= 9;
    }

    // increase sum by the result
    sum += digit;
  }

  // Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
  return (sum % 10 === 0);
}

function validate(n){
  const stringNumber = n.toString();

  let double = true;

  let sum = Number(stringNumber[stringNumber.length - 1]);  

  for (let i = stringNumber.length - 2; i >= 0; i--) {    
    let digit = Number(stringNumber[i]);
    
    if (double) {      
      digit *= 2;
    }

    double = !double;
    
    if (digit > 9) {
      digit -= 9;
    }

    sum += digit;
  }
  return (sum % 10 === 0);
}

function validate(n){
  let double = false;
  const digits = n.toString().split('');
  return digits.reduceRight((sum, digit) => {
    digit = Number(digit);
    if (double) {      
      digit *= 2;
    }
    double = !double;
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
    return sum;
  }, 0) % 10 === 0;
}

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
console.log(validate(4242424242424242), true);
console.log(validate(5555555555554444));



// def validate(number): return sum([sum(int(a) for a in str(c)) for c in [int(d)*(2 if i % 2 == 1 else 1) for i, d in enumerate(str(number)[::-1])]]) % 10 == 0