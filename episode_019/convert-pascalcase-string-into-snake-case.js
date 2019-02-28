function toUnderscore(string) {
  if (typeof string !== 'string') return string.toString();
  // use regex to match start with uppercase followed by 0 or more lowercase letters
  const words = string.match(/[A-Z0-9][a-z0-9]*/g);
  console.log(words);
  
  // map over words to lowercase
  const lowerCaseWords = words.map(word => word.toLowerCase());

  console.log(lowerCaseWords);
  
  // join on underscore
  return lowerCaseWords.join('_');
}

function toUnderscore(string) {
  if (typeof string !== 'string') return string.toString();
  return string
    .match(/[A-Z0-9][a-z0-9]*/g)
    .map(word => word.toLowerCase())
    .join('_');
}

function toUnderscore(string) {
  if (typeof string !== 'string') return string.toString();
  return string.replace(/[A-Z]/g, (letter) => '_' + letter.toLowerCase()).slice(1);
}

function toUnderscore(string) {
  if (typeof string !== 'string') return string.toString();
  return string.replace(/([A-Z])/g, '_$1').toLowerCase().slice(1);
}

// Alca
str => str.replace(/(?!^)([A-Z])/g, '_$1').toLowerCase()

console.log(toUnderscore('TestController'), 'test_controller');
console.log(toUnderscore('MoviesAndBooks'), 'movies_and_books');
console.log(toUnderscore('App7Test'), 'app7_test');
console.log(toUnderscore(1), '1');
// console.log(toUnderscore('1AbcDef'), '1');