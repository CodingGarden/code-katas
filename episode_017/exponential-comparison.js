function compare(number1, number2) {
  // let base1 = number1[0];
  // let exp1 = number1[1];
  // let base2 = number2[0];
  // let exp2 = number2[1];
  let [base1, exp1] = number1;
  let [base2, exp2] = number2;

  // const number1Raised = base1 ** exp1;
  // const number2Raised = base2 ** exp2;

  // console.log(number1Raised);
  // console.log(number2Raised);

  // log(x^k) = k * log(x)
  // thanks JT
  // lincoln logs
  const number1LincolnLog = exp1 * Math.log10(base1);
  const number2LincolnLog = exp2 * Math.log10(base2);
  
  console.log(number1LincolnLog);
  console.log(number2LincolnLog);

  return number1LincolnLog < number2LincolnLog ? number2 : number1;
}

function compare(number1, number2) {
  let [base1, exp1] = number1;
  let [base2, exp2] = number2;

  // log(x^k) = k * log(x)
  // thanks JT
  // lincoln logs
  const number1LincolnLog = exp1 * Math.log10(base1);
  const number2LincolnLog = exp2 * Math.log10(base2);

  return number1LincolnLog < number2LincolnLog ? number2 : number1;
}

const compare = ([base1, exp1], [base2, exp2]) => exp1 * Math.log(base1) < exp2 * Math.log(base2) ? [base2, exp2] : [base1, exp1];

console.log(compare([2,11],[3,7]), [3,7]);
console.log(compare([1,10],[2,3]), [2,3]);
console.log(compare([3,5],[5,3]), [3,5]);
console.log(compare([4,7],[3,8]), [4,7]);
console.log(compare([5, 1000],[6, 900]), [6, 900]);
console.log(compare([15991,714883],[960290,502358]), [960290,502358]);