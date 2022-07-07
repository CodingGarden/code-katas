function reverseWords(str) {
  // a place to store the reversed word initialized to empty
  let reversedWord = "";
  // a place to store the current word
  let currentWord = "";
  // iterate over the input string
  for (let i = 0; i < str.length; i += 1) {
    const currentLetter = str[i];
    // if the current letter is a space
    if (currentLetter === " ") {
      // prepend the current word to the reversed word
      reversedWord = " " + currentWord + reversedWord;
      // reset the current word to empty
      currentWord = "";
    } else {
      // append the current letter to the current word
      currentWord += currentLetter;
    }
  }

  // append the last current word
  reversedWord = currentWord + reversedWord;

  // return the reversed word
  return reversedWord;
}

function reverseWords(str) {
  let reversedWord = "";
  let currentWord = "";
  for (let i = 0; i < str.length; i += 1) {
    const currentLetter = str[i];
    if (currentLetter === " ") {
      reversedWord = " " + currentWord + reversedWord;
      currentWord = "";
    } else {
      currentWord += currentLetter;
    }
  }

  reversedWord = currentWord + reversedWord;

  return reversedWord;
}

function reverseWords(str) {
  const parts = str.split(" ");
  parts.reverse();
  return parts.join(" ");
}

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

function reverseWords(str) {
  let reversed = [];
  const words = str.split(" ");
  while (words.length) {
    reversed.push(words.pop());
  }
  return reversed.join(" ");
}

function reverseWords(str) {
  if (!str) return "";
  const words = str.split(" ");
  return (words.pop() + " " + reverseWords(words.join(" "))).trim();
}

// THANKS DOC!
const reverseWords = (x) =>
  new Promise(
    (r) => (
      ((y = []), x.split(" ")).forEach((k, i) =>
        setTimeout(() => y.push(k), x.length - i)
      ),
      setTimeout(() => r(y.join(" ")), x.length + 1)
    )
  );

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));
console.log(reverseWords("foobar"));
console.log(reverseWords("kata editor"));
console.log(reverseWords("row row row your boat"));
