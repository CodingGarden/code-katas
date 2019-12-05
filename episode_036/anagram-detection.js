// AndrewLaneX!
// const countLetters = input => [...input.toLowerCase()].reduce((letters, letter) => ({ ...letters, [letter]: (letters[letter] || 0) + 1 }), {});

function countLetters(input) {
  input = input.toLowerCase();
  // a place to store the counts
  const counts = {};
  // iterate over the letters of the word
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    // if the letter is not in the counts object
    if (!counts[letter]) {
      // add it with count 0
      counts[letter] = 0;
    }

    // increment the count of the current letter in the counts object
    counts[letter]++;
  }

  // return counts object
  return counts;
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    return (counts[letter] = counts[letter] || 0, counts[letter]++, counts);
  }, {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    return (counts[letter] = (counts[letter] || 0) + 1, counts);
  }, {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    // this might not work...
    return (counts[letter] = counts[letter]++ || 1, counts);
  }, {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => (counts[letter] = (counts[letter] || 0) + 1, counts), {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    return {
      ...counts,
      [letter]: (counts[letter] || 0) + 1
    };
  }, {});
}

function isAnagram(first, second) {
  // if length is not the same, instant false
  if (first.length !== second.length) {
    return false;
  }
  // if the words are exactly equal, instant true
  if (first === second) {
    return true;
  }

  // count letters in first, store in a variable
  const firstCounts = countLetters(first);
  // count letters in second, store in a variable
  const secondCounts = countLetters(second);
  
  const firstCountKeys = Object.keys(firstCounts);
  
  // check if both counts have the same number of keys
  if (firstCountKeys.length !== Object.keys(secondCounts).length) {
    // if not, instant false
    return false;
  }

  // iterate over the keys of the first counts object
  for (let i = 0; i < firstCountKeys.length; i++) {
    const letter = firstCountKeys[i];
    // if the second counts object does not have the same count for the current key,
    if (firstCounts[letter] !== secondCounts[letter]) {
      return false;
    }
  }

  // return true
  return true;
}


function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  if (first === second) {
    return true;
  }
  const firstCounts = countLetters(first);
  const secondCounts = countLetters(second);
  
  const firstCountKeys = Object.keys(firstCounts);
  
  if (firstCountKeys.length !== Object.keys(secondCounts).length) {
    return false;
  }

  return firstCountKeys.every(letter => {
    return firstCounts[letter] === secondCounts[letter];
  });
}

console.log(isAnagram('foefet', 'toffee'), true);
console.log(isAnagram('Buckethead', 'DeathCubeK'), true);
console.log(isAnagram(`Twoo`, 'WooT'), true);

console.log(isAnagram('dumble', 'bumble'), false);
console.log(isAnagram('ound', 'round'), false);
console.log(isAnagram('apple', 'pale'), false);