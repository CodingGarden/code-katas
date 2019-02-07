// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  // a place to store str1 letter counts
  const letterCounts = {};

  // iterate over str1
  for (let i = 0; i < str1.length; i++) {
    // set a property on the object that is the current letter
    // if the property didn't exist, set it to 1
    // otherwise increment the value
    const currentLetter = str1[i];
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
  }

  console.log(letterCounts);
  
  // iterate over str2
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    // if the current letter is in the object and the count is greater than 0
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    } else {
      // else break out of the loop
      return false;
    }
  }

  console.log(letterCounts);

  return true;
}

function scramble(str1, str2) {
  const letterCounts = str1.split('').reduce((letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});

  return str2.split('').every((currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      letterCounts[currentLetter]--;
      return true;
    } else {
      return false;
    }
  });
}

function scramble(str1, str2) {
  const letterCounts = Array.prototype.reduce.call(str1, (letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});

  return Array.prototype.every.call(str2, (currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      letterCounts[currentLetter]--;
      return true;
    } else {
      return false;
    }
  });
}