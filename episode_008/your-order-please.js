function order(words) {
  if (!words) return '';
  // an array to store the sorted words
  const sortedWords = [];
  // split the words on space
  const splitWords = words.split(' ');  

  // iterate over the words
  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i];
    // find the first digit in the word
    let digit = +word.match(/\d/)[0];
    // insert into the sorted array... in the correct place
    sortedWords[digit - 1] = word;
  }

  // join the sorted words array on space.
  return sortedWords.join(' ');
}

function order(words) {
  if (!words) return '';
  return words.split(' ').reduce((sortedWords, word) => {
    let digit = +word.match(/\d/)[0];
    sortedWords[digit - 1] = word;
    return sortedWords;
  }, []).join(' ');
}

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
console.log(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
console.log(order(''), '');