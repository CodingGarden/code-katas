function printerError(s) {
  // a place to store the number of errors
  let errors = 0;
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    
    // if the current letter is not within the range a-m
    if (currentLetter < 'a' || currentLetter > 'm') {
      // increment the number of errors
      errors++;
    }
  }
  
  return `${errors}/${s.length}`;
}

function printerError(s) {
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    if (!currentLetter.match(/[a-m]/)) {
      errors++;
    }
  }
  
  return `${errors}/${s.length}`;
}

function printerError(s) {
  const errors = s.match(/[^a-m]/g);
  return `${errors.length}/${s.length}`;
}

function printerError(s) {
  return `${s.match(/[^a-m]/g).length}/${s.length}`;
}

function printerError(s) {
  const goods = s.match(/[a-m]/g);
  return `${s.length-goods.length}/${s.length}`;
}

function printerError(s) {
  let errors = s.split('').reduce((errors, currentLetter) => {
    if (currentLetter < 'a' || currentLetter > 'm') {
      errors++;
    }
    return errors;
  }, 0); 
  return `${errors}/${s.length}`;
}

function printerError(s) {
  return s.split('').reduce((errors, currentLetter) => {
    if (currentLetter < 'a' || currentLetter > 'm') {
      errors++;
    }
    return errors;
  }, 0) + '/' + s.length;
}

function printerError(s) {
  return s.split('').reduce((errors, currentLetter) => {
    if (!currentLetter.match(/[a-m]/)) {
      errors++;
    }
    return errors;
  }, 0) + '/' + s.length;
}

function printerError(s) {
  return Array.prototype.reduce.call(s, (errors, currentLetter) => {
    if (!currentLetter.match(/[a-m]/)) {
      errors++;
    }
    return errors;
  }, 0) + '/' + s.length;
}

const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(printerError(s), '3/56');