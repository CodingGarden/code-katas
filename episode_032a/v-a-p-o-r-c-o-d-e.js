function vaporcode(string) {
  // a place to store the vaporwave string - initialized to empty string
  let vaporwave = '';
  // iterate over the letters in the string
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    // if letter is not a space
    if (letter !== ' ') {
      // uppercase the letter
      const uppercaseLettter = letter.toUpperCase();
      // append to the vaporwave string with 2 spaces
      vaporwave += uppercaseLettter + '  ';
    }
  }
  // return the vaporwave string
  return vaporwave.trim();
}

function vaporcode(string) {
  return string
    .toUpperCase()
    .split('')
    .filter(letter => letter !== ' ')
    .join('  ');
}

console.log(
  vaporcode('Let\'s go to the movies'),
  'L  E  T  \'  S  G  O  T  O  T  H  E  M  O  V  I  E  S'
);
console.log(
  vaporcode('Why isn\'t my code working?'),
  'W  H  Y  I  S  N  \'  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?'
);
