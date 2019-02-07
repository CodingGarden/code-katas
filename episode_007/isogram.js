// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str) {
  // a place to store the counts
  const counts = {};

  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    // see if we have seen this letter before
    const letter = str[i].toLowerCase();
    if (!counts[letter]) {
      // if not add it to the counts with a count of 1
      counts[letter] = 1;
    } else {
      // else 
      // NOT AN ISOGRAM
      return false;
    }
  }

  // IS AN ISOGRAM
  return true;
}

function isIsogram(str) {
  // a place to store the counts
  const counts = {};

  // iterate over the string
  return !str.split('').some((letter) => {
    letter = letter.toLowerCase();
    if (!counts[letter]) {
      counts[letter] = 1;
      return false;
    } else {
      return true;
    }
  });
}

function isIsogram(str) {
  // a place to store the counts
  const counts = {};

  // iterate over the string
  return !Array.prototype.some.call(str, (letter) => {
    letter = letter.toLowerCase();
    if (!counts[letter]) {
      counts[letter] = 1;
      return false;
    } else {
      return true;
    }
  });
}