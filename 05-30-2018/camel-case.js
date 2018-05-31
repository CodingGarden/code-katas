// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  // split the string by dash or underscore
  const words = str.split(/-|_/g);
  let camelCase = words[0];
  // a place to store the camelCase string
  // skip capitalizing the first word

  // iterate over the split string
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    // append the current word Capitalized to the camelCase string
    camelCase += word[0].toUpperCase() + word.slice(1);
  }

  // return the camelCase string
  return camelCase;
}

function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    if (index === 0) {
      return word;
    }
    return camelCase + word[0].toUpperCase() + word.slice(1);
  }, '');
}

const capitalize = word => word[0].toUpperCase() + word.slice(1);

function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    return index === 0 ? word : camelCase + capitalize(word);
  }, '');
}

function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => index === 0 ? word : camelCase + capitalize(word), '');
}

console.log(toCamelCase(''), '', 'An empty string was provided but not returned');
console.log(toCamelCase('the_stealth_warrior'), 'theStealthWarrior', 'toCamelCase(\'the_stealth_warrior\') did not return correct value');
console.log(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior', 'toCamelCase(\'The-Stealth-Warrior\') did not return correct value');
console.log(toCamelCase('A-B-C'), 'ABC', 'toCamelCase(\'A-B-C\') did not return correct value');
