function LCS(x, y) {
  // a place to store the common sequence
  if (!x.length || !y.length) return '';
  let sequence = '';
  // For example, here are two sequences having the same last element: (BANANA) and (ATANA).
  // Remove the same last element. Repeat the procedure until you find no common last element. The removed sequence will be (ANA).
  let lastX = x[x.length - 1];
  let lastY = y[y.length - 1];
  if (lastX === lastY) {
    sequence += lastX;
    x = x.slice(0, -1);
    y = y.slice(0, -1);
    return LCS(x, y) + sequence;
  }
  const left = LCS(x, y.slice(0, -1));
  const right = LCS(x.slice(0, -1), y);
  return sequence + (left.length > right.length ? left : right);
  // The sequences now under consideration: (BAN) and (AT)
  // The LCS of these last two sequences is, by inspection, (A).
  // Append the removed element, (ANA), giving (AANA), which, by inspection, is the LCS of the original sequences.
}

function LCS(x, y) {
  if (!x.length || !y.length) return '';
  let sequence = '';
  let lastX = x[x.length - 1];
  let lastY = y[y.length - 1];
  if (lastX === lastY) {
    sequence += lastX;
    x = x.slice(0, -1);
    y = y.slice(0, -1);
    return LCS(x, y) + sequence;
  }
  const left = LCS(x, y.slice(0, -1));
  const right = LCS(x.slice(0, -1), y);
  return (left.length > right.length ? left : right) + sequence;
}

console.log(LCS('BANANA', 'ATANA'), 'AANA');
console.log(LCS("a", "b"), "");
console.log(LCS("abcdef", "abc"), "abc");
console.log(LCS( "abcdef" , "abc" ), "abc");
console.log(LCS( "abcdef" , "acf" ), "acf");
console.log(LCS( "132535365" , "123456789" ), "12356");