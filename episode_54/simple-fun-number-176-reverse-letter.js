function reverseLetter(str) {
  // a place to store the reversed string
  // iterate over all the letters of the input string in reverse
    // check if the current letter is a letter
      // if so, append to the reversed string
  // return the reversed string
}

function isLetter(character) {
  const code = character.charCodeAt();
  const isUpperCaseLetter = code >= 65 && code <= 90;
  const isLowerCaseLetter = code >= 97 && code <= 122;
  return isUpperCaseLetter || isLowerCaseLetter;
}

function reverseLetter(str) {
  // a place to store the reversed string
  let reversed = '';
  // iterate over all the letters of the input string in reverse
  for (let i = str.length - 1; i >= 0; i--) {
    // check if the current letter is a letter
    if (isLetter(str[i])) {
      // if so, append to the reversed string
      reversed += str[i];
    }
  }
  // return the reversed string
  return reversed;
}

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .filter((c) => c.match(/[a-zA-Z]/))
    .join('');
}

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .filter((c) => c.match(/[a-z]/i))
    .join('');
}

function reverseLetter(str) {
  return str
    .replace(/[^a-z]/ig, '')
    .split('')
    .reverse()
    .join('');
}

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .filter((c) => /[a-zA-Z]/.test(c))
    .join('');
}

function reverseLetter(str) {
  return [...str]
    .reverse()
    .filter((c) => /[a-zA-Z]/.test(c))
    .join('');
}

function reverseLetter(str) {
  return [...str].reduce((reversed, letter) => {
    if (letter.match(/[a-z]/i)) return letter + reversed;
    return reversed;
  }, '');
}

function reverseLetter(str) {
  return [...str].reduceRight((reversed, letter) => {
    if (letter.match(/[a-z]/i)) return reversed + letter;
    return reversed;
  }, '');
}

function reverseLetter(str) {
  return [...str].reduce((reversed, letter) => letter.match(/[a-z]/i) ? letter + reversed : reversed, '');
}

function reverseLetter(str) {
  return [...str].reduceRight((reversed, letter) => letter.match(/[a-z]/i) ? reversed + letter : reversed, '');
}

function reverseLetter(str) {
  return Array.prototype.reduce.call(str, (reversed, letter) => {
    if (letter.match(/[a-z]/i)) return letter + reversed;
    return reversed;
  }, '');
}

function reverseLetter(str) {
  if (!str) return '';
  let letter = str[0];
  if (!letter.match(/[a-z]/i)) {
    letter = '';
  }
  return reverseLetter(str.slice(1)) + letter;
}

console.log(reverseLetter('krishan'),'nahsirk');
console.log(reverseLetter('ultr53o?n'),'nortlu');
console.log(reverseLetter('ab23c'),'cba');
console.log(reverseLetter('krish21an'),'nahsirk');