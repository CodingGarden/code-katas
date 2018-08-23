function longest(s1, s2) {
  // get all unique letters from both s1 s2
  const uniqueLetters = {};
    // a place to store unique letters {}
    // iterate over s1: for each letter
  for (let i = 0; i < s1.length; i++) {
    // if we have not see this letter, add it to the unique letters
    const currentLetter = s1[i];
    uniqueLetters[currentLetter] = true;
  }

  for (let i = 0; i < s2.length; i++) {
    const currentLetter = s2[i];
    uniqueLetters[currentLetter] = true;
  }

  // sort the unique letters
  const letters = Object.keys(uniqueLetters);
    // get all of the keys from the unique letters
    // use built in sort to sort the keys
  // return the unique letters sorted
  return letters.sort().join('');
}

function longest(s1, s2) {
  const uniqueLetters = {};
  const addUniqueLetters = (str) => {
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i];
      uniqueLetters[currentLetter] = true;
    }
  };

  addUniqueLetters(s1);
  addUniqueLetters(s2);

  const letters = Object.keys(uniqueLetters);
  return letters.sort().join('');
}

function longest(s1, s2) {
  const allLetters = s1 + s2;
  const uniqueLetters = allLetters.split('').reduce((uniqueLetters, currentLetter) => {
    uniqueLetters[currentLetter] = true;
    return uniqueLetters;
  }, {});

  const letters = Object.keys(uniqueLetters);
  return letters.sort().join('');
}

function longest(s1, s2) {
  return Object.keys((s1 + s2).split('').reduce((uniqueLetters, currentLetter) => {
    uniqueLetters[currentLetter] = true;
    return uniqueLetters;
  }, {})).sort().join('');
}

function longest(s1, s2) {
  return Object.keys((s1 + s2).split('').reduce((all, l) => { all[l] = true; return all; }, {})).sort().join('');
}

function longest(s1, s2) {
  return Object.keys((s1 + s2).split('').reduce((all, l) => (all[l] = true, all), {})).sort().join('');
}

function longest(s1, s2) {
  const uniqueLetters = new Set(s1 + s2);
  return [...uniqueLetters.values()].sort().join('');
}

function longest(s1, s2) {
  const uniqueLetters = new Set(s1 + s2);
  return [...uniqueLetters].sort().join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
console.log(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');