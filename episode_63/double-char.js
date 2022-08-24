function doubleChar(str) {
  // a place to store the doubled string
  // iterate over each character in the string
    // append the current character twice to the output string
  // return the doubled string
}

function doubleChar(str) {
  // a place to store the doubled string
  let doubledString = '';
  // iterate over each character in the string
  for (let i = 0; i < str.length; i += 1) {
    console.log(doubledString);
    // append the current character twice to the output string
    const currentCharacter = str[i];
    doubledString += currentCharacter + currentCharacter;
  }
  // return the doubled string
  return doubledString;
}

function doubleChar(str) {
  let doubledString = '';
  Array.from(str).forEach((character) => {
    doubledString += character + character;
  });
  return doubledString;
}

function doubleChar(str) {
  return Array
    .from(str)
    .reduce((doubledString, character) => {
      return doubledString + character + character;
    }, '');
}

function doubleChar(str) {
  return str.split('')
    .reduce((doubledString, character) => {
      return doubledString + character + character;
    }, '');
}

function doubleChar(str) {
  return [...str]
    .reduce((doubledString, character) => {
      return doubledString + character + character;
    }, '');
}

function doubleChar(str) {
  let doubledString = '';
  Array.from(str).forEach((character) => {
    // doubledString += character.repeat(2);
    doubledString = doubledString + character + character;
    // doubledString = doubledString + character.repeat(2);
    // doubledString = `${doubledString}${character}${character}`;
    // doubledString += `${character}${character}`;
  });
  return doubledString;
}

function doubleChar(str) {
  let doubledString = '';
  for (const currentCharacter of str) {
    doubledString += currentCharacter + currentCharacter;
  }
  return doubledString;
}

function doubleChar(str) {
  return str.replace(/(.)/g, (c) => c.repeat(2));
}

function doubleChar(str) {
  return str.replace(/(.)/g, '$1$1');
}

function doubleChar(str) {
  return str.replace(/./g, '$&$&');
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
const result = doubleChar("%^&*(");
console.log(result, "%%^^&&**((");