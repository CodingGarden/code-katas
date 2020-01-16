function interleave(...args) {
  const result = [];
  const lengths = args.map(({ length }) => length);
  const maxLength = Math.max(...lengths);
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < args.length; j++) { 
      let value = args[j][i];
      if (value === undefined) value = null;
      result.push(value);
    }
  }
  return result;
}

console.log(
  interleave([1, 2, 3], ["c", "d", "e"]),
  [1, "c", 2, "d", 3, "e"]
);
console.log(
  interleave([1, 2, 3], [4, 5]),
  [1, 4, 2, 5, 3, null]
);
console.log(
  interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]),
  [1, 4, 7, 2, 5, 8, 3, 6, 9]
);
console.log(
  interleave([]),
  []
);