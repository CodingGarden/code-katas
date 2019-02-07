/* 
{
  a: 2,
  b: 2,
  c: 1,
  d: 1
}

*/

function duplicateCount(text){
  // a place to store the counts of each letter in the word
  const counts = {};

  // iterate over each letter in the text
  for (let i = 0; i < text.length; i++) {
    // toLowerCase the letter
    const letter = text[i].toLowerCase();
    // if the counts has not seen this letter
    if (!counts[letter]) {
      // set that count to be 0
      counts[letter] = 0;
    }

    // increment the count by 1 for this letter
    counts[letter]++;
  }
    
  // a place to store the number of duplicates, initialized to 0
  let numDuplicates = 0;
  // iterate over each property in the counts
  for (let letter in counts) {
    const count = counts[letter];
    // if the value at this property is greater than 1
    if (count > 1) {
      // increment the number of duplicates
      numDuplicates++;
    }
  }

  // return the number of duplicates
  return numDuplicates;
}

function duplicateCount(text){
  const counts = {};
  const duplicates = {};
  let numDuplicates = 0;

  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;

    if (counts[letter] > 1 && !duplicates[letter]) {
      numDuplicates++;
      duplicates[letter] = true;
    }
  }

  return numDuplicates;
}

function duplicateCount(text){
  const counts = {};
  const duplicates = {};

  return Array.prototype.reduce.call(text, (numDuplicates, letter) => {
    letter = letter.toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;

    if (counts[letter] > 1 && !duplicates[letter]) {
      numDuplicates++;
      duplicates[letter] = true;
    }

    return numDuplicates;
  }, 0);
}

function duplicateCount(text){
  return Array.prototype.reduce.call(text, ({counts, duplicates, numDuplicates}, letter) => {
    letter = letter.toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;

    if (counts[letter] > 1 && !duplicates[letter]) {
      numDuplicates++;
      duplicates[letter] = true;
    }

    return {counts, duplicates, numDuplicates};
  }, {
    counts: {},
    duplicates: {},
    numDuplicates: 0
  }).numDuplicates;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2,'should ignore case');
console.log(duplicateCount('Indivisibility'), 1)
console.log(duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent')

// Adreas solution!
function duplicateCount(text){
  let result = {
      total: 0
  };

  const arr = text.toLowerCase().split('');
  return arr.reduce((numDuplicates, letter) => {     
      // if this is the first time we see this number...          
      if (!result[letter]) {
          result[letter] = 1;
          return numDuplicates;
      } else if (result[letter] === 1) {
        // if this is the second time we've seen this number
          result[letter]++;
          return numDuplicates + 1;
      }
      return numDuplicates;
  }, 0);
}

