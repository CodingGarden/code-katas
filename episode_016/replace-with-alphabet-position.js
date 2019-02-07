function alphabetPosition(text) {
  const numbers = [];
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const number = letter.toUpperCase().charCodeAt(0) - 64;
    if (number >= 1 && number <= 26) {
      numbers.push(number);
    }
  }
  
  return numbers.join(' ');
}

function alphabetPosition(text) {
  return text.replace(/[^a-zA-Z]/g, '').split('').map(letter => {
    return letter.toUpperCase().charCodeAt(0) - 64;
  }).join(' ');
}

function alphabetPosition(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(letter => {
    return letter.charCodeAt(0) - 64;
  }).join(' ');
}

function alphabetPosition(text) {
  return Array.prototype.map.call(text
    .toUpperCase()
    .replace(/[^A-Z]/g, ''), letter => {
      return letter.charCodeAt(0) - 64;
    }).join(' ');
}

// alca
function alphabetPosition(text) {
  ​return text
    .toUpperCase()
    .split('')
    .map(n => n.charCodeAt(0) - 64)
    .filter(n => n > 0 && n <= 26)
    .join(' ');
}

//alca
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map(n => n.charCodeAt(0) - 64)
    .join(' ')
}

function alphabetPosition(text) {
  let numbers = '';

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const number = letter.toUpperCase().charCodeAt(0) - 64;
    if (number >= 1 && number <= 26) {
      numbers += number + ' ';
    }
  }
  return numbers.trim();
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock."),
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(
  alphabetPosition("The narwhal bacons at midnight."),
  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
