function count (string) {  
  // an object to store the counts
  const counts = {};
  // iterate over the letters in the string
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    // if the current letter is not a property in the object
      // set it 0
    counts[letter] = counts[letter] || 0;
    // increment the current letter in the object by 1
    counts[letter]++;
  }
  return counts;
}

function count (string) {
  return Array.prototype.reduce.call(string, (counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});
}

function count (string) {
  return string.split('').reduce((counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});
}

function count (string) {
  return [].reduce.call(string, (counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});
}

console.log(count('aba'), { a: 2, b: 1 }); 
console.log(count(''), {});