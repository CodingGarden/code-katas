function reverseString(input) {
  return input.split('').reverse().join('');
}

function spinWords(sentence){
  let result = '';
  const words = sentence.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 5) {
      word = reverseString(word);
    }
      result += ' ' + word;
  }

  return result.trim();
}

function spinWords(sentence){
  let result = '';
  const words = sentence.split(' ');
  
  for (let word of words) {
    if (word.length >= 5) {
      word = reverseString(word);
    }
      result += ' ' + word;
  }

  return result.trim();
}

function spinWords(sentence){
  return sentence.split(' ').map(word => {
    if (word.length >= 5) {
      return reverseString(word);
    }
    return word;
  }).join(' ');
}

function spinWords(sentence){
  return sentence.split(' ').reduce((result, word) => {
    if (word.length >= 5) {
      word = reverseString(word);
    }
    result += ' ' + word;
    return result;
  }, '').trim();
}

function spinWords(sentence){
  return sentence.split(' ').reduce((result, word, i) => {
    if (word.length >= 5) {
      word = reverseString(word);
    }
    if (i == 0) {
      result += word;
    } else {
      result += ' ' + word;
    }
    return result;
  }, '');
}

console.log(
  spinWords("Hey fellow warriors"),
  "Hey wollef sroirraw");