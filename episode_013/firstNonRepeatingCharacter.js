function firstNonRepeatingLetter(s) {
  if (!s) return '';

  const counts = Array.prototype.reduce.call(s, (counts, letter) => {
    letter = letter.toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});

  return Array.prototype.find.call(s, (letter) => {
    return counts[letter.toLowerCase()] === 1;
  }) || '';
}

function firstNonRepeatingLetter(s) {
  if (!s) return '';

  const counts = Array.prototype.reduce.call(s, (counts, letter) => {
    letter = letter.toLowerCase();
    counts.set(letter, (counts.get(letter) || 0) + 1);
    return counts;
  }, new Map());

  // make this work...
  // for (let [letter, count] of counts) {
  //   if (count === 1) {
  //     return letter;
  //   }
  // }

  return Array.prototype.find.call(s, (letter) => {
    return counts[letter.toLowerCase()] === 1;
  }) || '';
}

function firstNonRepeatingLetter(s) {
  const sCaseless = s.toLowerCase();
  return s[sCaseless.split('').findIndex(c => sCaseless.lastIndexOf(c) === sCaseless.indexOf(c))] || '';
}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');