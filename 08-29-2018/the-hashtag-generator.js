function generateHashtag (str) {
  if (!str.trim()) return false;

  // split word on spaces
  const result = '#' + str.split(' ')
    .filter(word => word)
    .map(word => {
      // map over words -> return word uppercased
      return word[0].toUpperCase() + word.slice(1);
    }).join(''); // join together on empty string

  if (result.length >= 140) return false;
  return result;
}

function generateHashtag (str) {
  if (!str.trim()) return false;

  const result = '#' + str.replace(/\s+/g, ' ').split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join('');

  if (result.length >= 140) return false;
  return result;
}

function generateHashtag (str) {
  if (!str.trim()) return false;

  const result = '#' + str.replace(/\s+/g, ' ').split(' ')
    .reduce((result, word) => {
      return result + word[0].toUpperCase() + word.slice(1);
    }, '');

  if (result.length >= 140) return false;
  return result;
}

function generateHashtag (str) {
  if (!str.trim()) return false;

  const result = str.trim().split(/\s+/g)
    .reduce((result, word) => {
      return result + word[0].toUpperCase() + word.slice(1);
    }, '');

  if (result.length >= 140) return false;
  return '#' + result;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));


console.log(generateHashtag(''), false);
console.log(generateHashtag(' '.repeat(200)), false);
console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag');
console.log(generateHashtag('Codewars'), '#Codewars');
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice');
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice');
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'), false);
console.log(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138));
console.log(generateHashtag('a'.repeat(140)), false);
