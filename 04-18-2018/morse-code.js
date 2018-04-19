decodeMorse = function(morseCode){
  return morseCode.split('   ').map(word => word.split(' ').map(code => (MORSE_CODE[code] || '')).join('')).join(' ').trim();
}

decodeMorse = function(morseCode){
  // splits words at 3 spaces
  return morseCode.split('   ').map(codedWord => {
    // split codedWord into individual codes
    return codedWord.split(' ').reduce((word, code) => {
      // convert code to letter/digital/symbol
      return word + (MORSE_CODE[code] || '');
    }, ''); // join letters to a single word
  }).join(' ').trim(); // join all words into a single sentence
}

decodeMorse = function(morseCode){
  // splits words at 3 spaces
  return morseCode.split('   ').reduce((sentence, codedWord, index, codeWordArray) => {
    // split codedWord into individual codes
    return sentence + codedWord.split(' ').reduce((word, code) => {
      // convert code to letter/digital/symbol
      return word + (MORSE_CODE[code] || '');
    }, '') + (index < codeWordArray.length - 1 ? ' ' : '');
  }, '').trim();
}
