// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

function correct(string) {
  // replace 5 with S
  string = string.replace(/5/g, 'S');
  // replace 0 with O
  string = string.replace(/0/g, 'O');
  // replace 1 with I
  string = string.replace(/1/g, 'I');

  return string;
}

function correct(string) {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

function correct(string) {
  return string.replace(/5|0|1/g, (letter) => {
    switch(letter) {
    case '5':
      return 'S';
    case '0':
      return 'O';
    case '1':
      return 'I';
    }
  });
}

function correct(string) {
  const mistakes = { 5: 'S', 0: 'O', 1: 'I' };
  return string.replace(/5|0|1/g, (letter) => mistakes[letter]);
}

console.log(correct('L0ND0N'),'LONDON');
console.log(correct('DUBL1N'),'DUBLIN');
console.log(correct('51NGAP0RE'),'SINGAPORE');
console.log(correct('BUDAPE5T'),'BUDAPEST');
console.log(correct('PAR15'),'PARIS');