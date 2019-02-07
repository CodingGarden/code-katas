function getCount(str) {
  let vowelsCount = 0;

  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    // if the current letter is a, e, i, o or u
    if (currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u') {
      // increase the vowelsCount
      vowelsCount++;
    }
  }

  return vowelsCount;
}


function getCount(str) {
  let vowelsCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    // if the current letter is a, e, i, o or u
    if (vowels[currentLetter]) {
      // increase the vowelsCount
      vowelsCount++;
    }
  }

  return vowelsCount;
}

function getCount(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  return str.split('').reduce((vowelsCount, currentLetter) => {
    if (vowels[currentLetter]) {
      vowelsCount++;
    }
    return vowelsCount;
  }, 0);
}

function getCount(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  return str.split('').filter((currentLetter) => vowels[currentLetter]).length;
}

console.log(getCount("abracadabra") == 5);
