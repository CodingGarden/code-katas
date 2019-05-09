function isPangram(string) {
  // create an object with every lower case letter as a property
  const allLetters = {};
  for (let i = 97; i <= 122; i++) {
    allLetters[String.fromCharCode(i)] = true;
  }

  // iterate over the string
  for (let i = 0; i < string.length; i++) {
    const character = string[i].toLowerCase();
    // delete / remove the lowercase letter from the above object
    delete allLetters[character];
  }

  // if object has no properties return true
  return Object.keys(allLetters).length === 0;
}

function isPangram(string) {
  // create a Set from only letters a-z in the string  
  const allLetters = new Set(string.toLowerCase().match(/[a-z]/g));
  // if length of Set is 26 return true!
  return allLetters.size === 26;
}

// Daniel!
​function isPangram(string) {
  let newstr = string.toLowerCase().match(/[a-z]/g, "")
  let set1 = new Set(newstr);
  return set1.size === 26;
}


const input1 = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(input1), true);
const input2 = 'This is not a pangram.';
console.log(isPangram(input2), false);