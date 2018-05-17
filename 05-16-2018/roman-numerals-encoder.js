// 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number) {
  const lookUp = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    600: 'DC',
    900: 'CM',
    1000: 'M'
  };

  let roman = '';
  const keys = Object.keys(lookUp);
  while (number > 0) {
    for (let i = keys.length - 1; i >= 0; i--) {
      let romanLetter = keys[i];
      if (number >= romanLetter) {
        while(number >= romanLetter) {
          roman += lookUp[romanLetter];
          number -= romanLetter;
        }
        keys.pop();
        break;
      }
    }
  }

  return roman;
}

console.log(solution(1) == 'I', '1 should == "I"')
console.log(solution(4) == 'IV', '4 should == "IV"')
console.log(solution(1000) == 'M', '1000 should == "M"')
console.log(solution(1990) == 'MCMXC', '1990 should == "MCMXC"')
console.log(solution(2007) == 'MMVII', '2007 should == "MMVII"')