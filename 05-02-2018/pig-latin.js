// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

function pigIt(str){
  // split string on space
    // map the words
      // word with the first letter at the end and ay
    // join on space

  return str.split(' ').map(word => word.slice(1) + word[0] + 'ay').join(' ');
}

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

function pigIt(str){
  // a place to store the pig latin
  let pigLatin = ''
  let firstLetter = str[0];
  // iterate over the string
  for (let i = 1; i < str.length; i++) {
    const currentLetter = str[i];
    if (!firstLetter) {
      firstLetter = currentLetter;
    } else {
      if (currentLetter != ' ') {
        // append each next letter until we see a space
        pigLatin += currentLetter;
      } else {
        // append the current first letter and ay
        pigLatin += firstLetter + 'ay ';
        firstLetter = '';
      }
    }
  }
  pigLatin += firstLetter + 'ay';

  return pigLatin;
}

console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')
