const opposites = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST'
};

function dirReduc(arr) {
  const stack = [];

  arr.forEach(dir => {
    if (stack.length) {
      const prevDir = stack.pop();
      if (prevDir !== opposites[dir]) {
        stack.push(prevDir);
        stack.push(dir);
      }
    } else {
      stack.push(dir);
    }
  });

  return stack;
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
console.log(
  dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
console.log(
  dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);


  // function dirReduc(arr){
//   const past = {};
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const dir = arr[i];
//     const oppositeDir = opposites[dir];
//     past[dir] = past[dir] || [];
//     past[dir].push(i);
//     if (past[oppositeDir]) {
//       arr.splice(i, 1);
//       past[dir]--;
//     }
//   }
// }