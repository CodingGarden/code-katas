const errorMessages = {
  notValid: 'Not valid',
  notFound:'No palindromes found',
};

function createMemoizedIsSubPalindrome() {
  const cache = {};
  return (number) => {
    if (number in cache) return cache[number];
    const strNum = number.toString();
    const result = strNum.split('').reverse().join('') == strNum;
    cache[number] = result;
    return result;
  };
}

const isSubPalindrome = createMemoizedIsSubPalindrome();

function createMemoizedPalindrome() {
  const cache = {};
  return (num, palindromes = []) => {
    let result;
    if (num in cache) return cache[num];
    if (typeof num !== 'number') {
      result = errorMessages.notValid;
    } else if (num < 0) {
      result = errorMessages.notValid;
    } else if (num < 10) {
      result = errorMessages.notFound;
    }
    
    if (result) {
      cache[num] = result;
      return result;
    }

    if (isSubPalindrome(num)) {
      palindromes.push(num);
    }
  
    palindrome(+num.toString().slice(1), palindromes);
    palindrome(+num.toString().slice(0, -1), palindromes);
  
    if (!palindromes.length) {
      cache[num] = errorMessages.notFound;
      return errorMessages.notFound;
    }
    return [...new Set(palindromes.sort((a, b) => a - b))];
  };
}

const palindrome = createMemoizedPalindrome();

// console.log(palindrome('ACCDDCCA'),errorMessages.notValid);
// console.log(palindrome('1551'),errorMessages.notValid);
// console.log(palindrome(-4505),errorMessages.notValid);
// console.log(palindrome(2),errorMessages.notFound);
// console.log(palindrome(1551),[55,1551]);
const start = Date.now();
console.log(palindrome(221122),[11,22,2112,221122]);
const end = Date.now();
console.log((end - start) / 1000, 'Seconds.');
// console.log(palindrome(10015885),[88,1001,5885]);
// console.log(palindrome(13598),errorMessages.notFound);
