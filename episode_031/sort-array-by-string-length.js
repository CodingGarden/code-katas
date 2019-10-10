function sortByLength (array) {
  array.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });
  return array;
}

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);

