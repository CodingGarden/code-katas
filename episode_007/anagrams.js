// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


// n
// n log n
// n
// n
const sortWord = word => [...word].sort().join('').toLowerCase();

function anagrams(word, words) {
  // sort characters in word
  const sortedWord = sortWord(word); // m log m
  // a place to store the anagrams
  const anagrams = [];

  // iterate over words
  // n
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    // sort characters in the current word
    const currentWordSorted = sortWord(currentWord); // m log m
    // if the current word sorted is equal to the sorted word
    if (sortedWord === currentWordSorted) {
      // push into anagarams array
      anagrams.push(currentWord);
    }
  }

  // n * m log m
  
  return anagrams;
}

// m
const countLetters = word => Array.prototype.reduce.call(word, (counts, letter) => {
  letter = letter.toLowerCase();
  counts[letter] = counts[letter] || 0;
  counts[letter]++;
  return counts;
}, {});

// k
const looseEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length != obj2Keys.length) {
    return false;
  }
  return obj1Keys.every(key => obj1[key] === obj2[key]);
};

function anagrams(word, words) {
  // count the occurences of each letter in the input word
  const letterCount = countLetters(word);  // m
  const anagarams = [];

  // iterate over words
  // n
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    // count the occurences of each letter in the current word
    const currentWordLetterCount = countLetters(currentWord); // m
    if (looseEqual(currentWordLetterCount, letterCount)) { // k
      anagarams.push(currentWord);
    }
  }

  return anagarams;
}

function anagrams(word, words) {
  const letterCount = countLetters(word);
  return words.filter(currentWord => looseEqual(letterCount, countLetters(currentWord)));
}

console.log(anagrams('aBba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), [])
