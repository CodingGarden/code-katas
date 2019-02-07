function breakApart(number) {
  let [integer] = number.toString().split('.').map(Number);
  const decimal = number - integer;
  return {
    integer,
    decimal
  };
}

Math.round = function(number) {
  const { integer, decimal } = breakApart(number);
  return integer + (decimal >= .5 ? 1 : 0);
  // return decimal >= .5 ? integer + 1 : integer;
  // if (decimal >= .5) {
  //   return integer + 1;
  // }
  // return integer;
};

Math.ceil = function(number) {
  const { integer, decimal } = breakApart(number);
  return decimal > 0 ? integer + 1 : integer;
  // if (decimal > 0) {
  //   return integer + 1;
  // }
  // return integer;
};

Math.floor = function(number) {
  const { integer } = breakApart(number);
  return integer;
};

console.log(Math.round(0.4), 0, 'Math.round(0.4)');
console.log(Math.round(0.5), 1, 'Math.round(0.5)');

console.log(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
console.log(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
console.log(Math.floor(0.5), 0, 'Math.floor(0.5)');