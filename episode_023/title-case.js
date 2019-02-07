function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function titleCase(title, minorWords = '') {
  if (title.trim() === '') return '';
  // create structure to use for checking if a given word is a minor word
  // split minorWords on spaces into a new array
  // a place to store the minor words structure (object)
  const checkMinorWords = minorWords
    .toLowerCase()
    .split(' ')
    .reduce((words, word) => {
      // set property on the minor words structure with the given word and a value of true
      words[word] = true;
      return words;
    }, {});  

  // split the title on spaces into a new array
  // a place to store the final title
  // iterate over array of words
  return title
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (i === 0) return capitalize(word);
      if (checkMinorWords[word]) return word;
      return capitalize(word);
    }).join(' ');
}

function titleCase(title, minorWords = '') {
  if (title.trim() === '') return '';

  const checkMinorWords = minorWords
    .toLowerCase()
    .split(' ');

  return title
    .toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (i && checkMinorWords.includes(word)) return word;
      return capitalize(word);
    }).join(' ');
}

// ALCA!!!
function titleCase(t, mW = '', m = mW.toLowerCase().split(' ')) {
  return t === '' ? t : t.toLowerCase().split(' ').map((n, i) => i && m.includes(n) ? n : n[0].toUpperCase() + n.slice(1)).join(' ');
}

console.log(titleCase(''), '');
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');
