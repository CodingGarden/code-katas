function duplicateEncode(word){
  // a place to store whether or not a letter is a duplicate
  const isDuplicate = {};
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    // if we have seen this letter before set to true
    if (letter in isDuplicate) {
      isDuplicate[letter] = true;
    } else {
      isDuplicate[letter] = false;
    }
  }
  
  // a place to store the parenthesis
  let parenthesis = '';
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    // if this letter is a duplicate
    if (isDuplicate[letter]) {
      // append a )
      parenthesis += ')';
    } else { 
      // append a (
      parenthesis += '(';
    }
  }
  
  return parenthesis;
}

function duplicateEncode(word){
  const isDuplicate = Array.prototype.reduce.call(word, (isDuplicate, letter) => {
    letter = letter.toLowerCase();
    if (letter in isDuplicate) {
      isDuplicate[letter] = true;
    } else {
      isDuplicate[letter] = false;
    }
    return isDuplicate;
  }, {});

  return Array.prototype.reduce.call(word, (parenthesis, letter) => {
    letter = letter.toLowerCase();
    if (isDuplicate[letter]) {
      parenthesis += ')';
    } else { 
      parenthesis += '(';
    }

    return parenthesis;
  }, '');
}

function duplicateEncode(word){
  const isDuplicate = Array.prototype.reduce.call(word, (isDuplicate, letter) => {
    letter = letter.toLowerCase();
    return (letter in isDuplicate ? isDuplicate[letter] = true : isDuplicate[letter] = false, isDuplicate);
  }, {});

  return Array.prototype.reduce.call(word, (parenthesis, letter) => {
    letter = letter.toLowerCase();
    return isDuplicate[letter] ? parenthesis + ')' : parenthesis + '(';
  }, '');
}

function duplicateEncode(word){
  const isDuplicate = Array.prototype.reduce.call(word, (dup, letter) => (letter.toLowerCase() in dup ? dup[letter.toLowerCase()] = true : dup[letter.toLowerCase()] = false, dup), {});
  return Array.prototype.reduce.call(word, (parenthesis, letter) => isDuplicate[letter.toLowerCase()] ? parenthesis + ')' : parenthesis + '(', '');
}


// Courtesy of meiamsome:
const duplicateEncode = cased => [cased.toLowerCase().split('')].map(word => [word.reduce((acc, c) => (acc[c] = (acc[c] || 0) + 1, acc), {})].map(counts => word.map(c => counts[c] > 1 ? ')' : '('))[0].join(''))[0];

console.log(duplicateEncode('din'),'(((');
console.log(duplicateEncode('recede'),'()()()');
console.log(duplicateEncode('Success'),')())())','should ignore case');
console.log(duplicateEncode('(( @'),'))((');