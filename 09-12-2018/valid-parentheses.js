function validParentheses(parens){
  // ( - 1
  // ) - -1
  // a place to store the sum
  // initialized to 0
  let sum = 0;
  // iterate over the parens
  for (let i = 0; i < parens.length; i++) {
    const paren = parens[i];
    // if a open paren
    if (paren === '(') {
      // add 1 to the sum
      sum += 1;
    } else {
      // if a closing paren
      // subtract 1 from the sum
      sum -= 1;
    }
    // if the sum is negative, return false
    if (sum < 0) {
      return false;
    }
  }
  
  // if the sum is equal to 0, return true
  return sum === 0;
}

function validParentheses(parens){
  const values = {
    '(': 1,
    ')': -1
  }

  let sum = 0;
  for (let i = 0; i < parens.length; i++) {
    const paren = parens[i];
    sum += values[paren];
    if (sum < 0) {
      return false;
    }
  }
  
  return sum === 0;
}

function validParentheses(parens){
  const values = {
    '(': 1,
    ')': -1
  }

  let sum = 0;

  const isPositiveSum = Array.prototype.every.call(parens, (paren) => {
    sum += values[paren];
    if (sum < 0) {
      return false;
    }
    return true;
  });
  
  return isPositiveSum && sum === 0;
}

function validParentheses(parens, sum = 0){
  return Array.prototype.every.call(parens, (paren) => {
    sum += {
      '(': 1,
      ')': -1
    }[paren];
    return sum >= 0;
  }) && sum === 0;
}

function validParentheses(parens, sum = 0){
  return Array.prototype.every.call(parens, (paren) => {
    return (sum += {
      '(': 1,
      ')': -1
    }[paren]) >= 0;
  }) && sum === 0;
}

console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);