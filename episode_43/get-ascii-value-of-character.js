function getASCII(c){
  if (c === 'A') return 65;
  if (c === 'B') return 66;
  if (c === 'C') return 67;
  if (c === ' ') return 32;
  if (c === '!') return 33;
  // you could write every possible if statement...
}

const mapping = {
  A: 65,
  B: 66,
  C: 67,
  ' ': 32,
  '!': 33
  // you could write every possible if statement...
};

function getASCII(c){
  return mapping[c];
}

function getASCII(c) {
  return c.charCodeAt(0);
}

function getASCII(c) {
  return new TextEncoder().encode(c)[0];
}

console.log(getASCII('A'), 65);
console.log(getASCII(' '), 32);
console.log(getASCII('!'), 33);



// https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/TextEncoder