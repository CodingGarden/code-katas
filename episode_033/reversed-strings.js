function reverseString(str){
  // a place to store the reversed string
  // initialized to the empty string
  let reversed = '';
  
  // iterate over the string in reverse
  for (let i = str.length - 1; i >= 0; i--) {
    // store the current letter in a variable
    const letter = str[i];
    // append the letter to the reversed string
    reversed += letter;
  }
  
  // return the reversed string
  return reversed;
}

function reverseString(str){
  let reversed = '';
  
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    reversed = letter + reversed;
  }
  
  return reversed;
}

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverseString(str) {
  let reversed = '';
  
  [].forEach.call(str, (letter) => {
    reversed = letter + reversed;
  });

  // Array.prototype.forEach.call(str, (letter) => {
  //   reversed = letter + reversed;
  // });

  // str.split('').forEach((letter) => {
  //   reversed = letter + reversed;
  // });

  // [...str].forEach((letter) => {
  //   reversed = letter + reversed;
  // });
  
  return reversed;
}

function reverseString(str) {
  return [].reduce.call(str, (reversed, letter) => {
    return letter + reversed;
  }, '');
}

function reverseString(str) {
  return [].reduceRight.call(str, (reversed, letter) => {
    return reversed + letter;
  }, '');
}

// function reverseString([a, ...b]) {
//   return b.length ? reverseString(b) + a : a;
// }

// const [a, ...b] = 'world';
// console.log(a);
// console.log(b);

console.log(reverseString('world'), 'dlrow');

// Use 2 pointer approach to reverse the string

// .pop() then poped value + reverse :D

// reverseString = x = ([a, ...b]) => b.length ? x(b) + a : a;


