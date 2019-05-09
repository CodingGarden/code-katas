function reverseWords(str) {
  // a place to store the reversed words
  let reversedStr = '';
  // a place to store an individually reversed word
  let reversedWord = '';
  // iterate over the string from index 0 to the end
  for (let i = 0; i < str.length; i++) {
    const character = str[i];    
    // if the current character is not a space
    if (character !== ' ') {
      // prepend letter to individually reversed word
      reversedWord = character + reversedWord;
    } else {
      // append individually reversed word to the whole reversed words
      reversedStr += reversedWord + ' ';
      reversedWord = '';
      // append the space character
    }
  }
  // return the reversed words
  return reversedStr + reversedWord;
}

function reverseWords(str) {
  let reversedStr = '';
  let reversedWord = '';
  for (let i = 0; i < str.length; i++) {
    const character = str[i];    
    if (character !== ' ') {
      reversedWord = character + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  return reversedStr + reversedWord;
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function reverseWord(word) {
  return [...word].reverse().join('');
}

function reverseWords(str) {
  return str.split(' ').map(reverseWord).join(' ');
}

function reverseWords(str) {
  return str.split(' ').map(word => [...word].reverse().join('')).join(' ');
}

function reverseWords(str) {
  let reversedStr = '';
  let reversedWord = '';
  Array.prototype.forEach.call(str, (character) => {
    if (character !== ' ') {
      reversedWord = character + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  });
  return reversedStr + reversedWord;
}

function reverseWords(str) {
  let reversedWord = '';
  return Array.prototype.reduce.call(str, (reversedStr, character) => {
    if (character !== ' ') {
      reversedWord = character + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
    return reversedStr;
  }, '') + reversedWord;
}

function reverseWords(str, reversedWord = '') {
  return Array.prototype.reduce.call(str, (reversedStr, character) => (character !== ' ' ? reversedWord = character + reversedWord : (reversedStr += reversedWord + ' ', reversedWord = ''), reversedStr), '') + reversedWord;
}

function reverseWords(str, reversedWord = '') {
  return [].reduce.call(str, (reversedStr, character) => (character !== ' ' ? reversedWord = character + reversedWord : (reversedStr += reversedWord + ' ', reversedWord = ''), reversedStr), '') + reversedWord;
}

// ALCA!!!
const reverseWord = s => s.split('').reduce((p, n) => (n === ' ' ? (p[0] += p[1] + n, p[1] = '') : p[1] = n + p[1], p), [ '', '' ]).join('');

console.log(reverseWords('The quick brown fox jumps over the lazy dog.') == 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple') == 'elppa');
console.log(reverseWords('a b c d') == 'a b c d');
console.log(reverseWords('double  spaced  words') == 'elbuod  decaps  sdrow');