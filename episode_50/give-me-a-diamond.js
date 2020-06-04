function repeat(char, number) {
  let line = '';
  for (let j = 0; j < number; j += 1) {
    line += char;
  }
  return line;
}

function diamond(n) {
  // check if n is not odd or 0 or less
  if (n <= 0 || n % 2 === 0) return null;

  // a place to store the diamond
  let topDiamond = '';
  let bottomDiamond = '';
  // iterate up to n, starting at 1, increment by 2
  for (let i = 1; i < n; i += 2) {
    const numSpaces = (n - i) / 2;
    // create a string
    let line = '';
    // starting with whitspace (figure out how to do that...)
    line += repeat(' ', numSpaces);
    // followed by i stars
    line += repeat('*', i);
    // append the current line to the diamond (with a newline)
    topDiamond = topDiamond + line + '\n';
    bottomDiamond = line + '\n' + bottomDiamond;
  }

  return topDiamond
    + repeat('*', n)
    + '\n'
    + bottomDiamond;
}

// MIDDLE OUT WAY!
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let diamond = '';
  diamond += '*'.repeat(n) + '\n';
  let numSpaces = 1;
  for (let i = n - 2; i >= 0; i -= 2) {
    const line = ' '.repeat(numSpaces) + '*'.repeat(i) + '\n';
    diamond = line + diamond + line;
    numSpaces += 1;
  }

  return diamond;
}

const line = (s, n) => ' '.repeat(s)
  + '*'.repeat(n)
  + '\n';

// RECURSIVE
function diamond(n, s = 0, above = true) {
  if (n <= 0 || n % 2 === 0) return null;
  if (n === 1) return line(s, n);
  if (s === 0) return diamond(n - 2, s + 1)
    + line(s, n)
    + diamond(n - 2, s + 1, false);
  if (above) return diamond(n - 2, s + 1, above)
    + line(s, n);
  return line(s, n)
    + diamond(n - 2, s + 1, above);
}

console.log(diamond(1) == '*\n');
console.log(diamond(3) == ' *\n***\n *\n');
console.log(diamond(5) == '  *\n ***\n*****\n ***\n  *\n');
console.log(diamond(2) == null);
console.log(diamond(-3) == null);
console.log(diamond(0) == null);