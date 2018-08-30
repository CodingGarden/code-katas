function capitals(word) {
  // a place to store the indices
  const indices = [];
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // if the current letter is uppercase
    if (letter === letter.toUpperCase()) {
      // push the current index into the indices array
      indices.push(i);
    }
  }
  // return indices array
  return indices;
}

function capitals(word) {
  return word.split('').map((letter, i) => ({
    letter,
    i
  }))
    .filter(({letter}) => letter === letter.toUpperCase())
    .map(({i}) => i);
}

function capitals(word) {
  const indices = [];
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      indices.push(i);
    }
  }
  return indices;
}

function capitals(word) {
  return word.split('').map((letter, i) => ({
    charCode: letter.charCodeAt(0),
    i
  }))
    .filter(({charCode}) => charCode >= 65 && charCode <= 90)
    .map(({i}) => i);
}

function capitals(word) {
  const indices = [];
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter.match(/[A-Z]/)) {
      indices.push(i);
    }
  }
  return indices;
}

function capitals(word) {
  return word.split('').map((letter, i) => ({
    letter,
    i
  }))
    .filter(({letter}) => letter.match(/[A-Z]/))
    .map(({i}) => i);
}

// foreach

function capitals(word) {
  const indices = [];
  word.split('').forEach((letter, i) => {
    if (letter.match(/[A-Z]/)) {
      indices.push(i);
    }
  });
  return indices;
}

// reduce

function capitals(word) {
  return word.split('').reduce((indices, letter, i) => {
    if (letter.match(/[A-Z]/)) {
      indices.push(i);
    }
    return indices;
  }, []);
}

function capitals(word) {
  return Array.prototype.reduce.call(word, (indices, letter, i) => {
    if (letter.match(/[A-Z]/)) {
      indices.push(i);
    }
    return indices;
  }, []);
}

function capitals(word) {
  return Array.prototype.reduce.call(word, (indices, letter, i) => letter.match(/[A-Z]/) ? indices.concat(i) : indices, []);
}

console.log( capitals('CodEWaRs'), [0,3,4,6] );