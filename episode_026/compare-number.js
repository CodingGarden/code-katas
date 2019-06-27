// naive solution...
// function compare(a,b){
//   const numA = +a;
//   const numB = +b;
//   if (numA < numB) return 'less';
//   if (numA == numB) return 'equal';
//   if (numA > numB) return 'greater';
// }

function compare(a, b, flipResult = false) {
  if (a[0] === '-' && b[0] !== '-') {
    return 'less';
  } else if (b[0] === '-' && a[0] !== '-') {
    return 'greater';
  } else if (a[0] === '-' && b[0] === '-') {
    flipResult = true;
    a = a.slice(1);
    b = b.slice(1);
  }

  while (a[0] === '0') {
    a = a.slice(1);
  }

  while (b[0] === '0') {
    b = b.slice(1);
  }

  let aDecimal;
  let bDecimal;
  [a, aDecimal = ''] = a.split('.');
  [b, bDecimal = ''] = b.split('.');

  // if the length of a is longer than the length of b
  if (a.length > b.length) return flipResult ? 'less' : 'greater';
  
  // if the length of a is the same as b
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      const digitA = a[i];
      const digitB = b[i];
      if (digitA > digitB) {
        return flipResult ? 'less' : 'greater';
      } else if (digitA < digitB) {
        return flipResult ? 'greater' : 'less';
      }
    }
    if (aDecimal || bDecimal) {
      while (aDecimal[aDecimal.length - 1] === '0') {
        aDecimal = aDecimal.slice(0, aDecimal.length - 1);
      }
    
      while (bDecimal[bDecimal.length - 1] === '0') {
        bDecimal = bDecimal.slice(0, bDecimal.length - 1);
      }

      while (aDecimal.length < bDecimal.length) {
        aDecimal += '0';
      }

      while (bDecimal.length < aDecimal.length) {
        bDecimal += '0';
      }
      return compare(aDecimal, bDecimal, flipResult);
    }
    return 'equal';
  }

  // if the length of a is shorter than the length of b
  if (a.length < b.length) return flipResult ? 'greater' : 'less';
}


console.log(compare('2','12'),'less');
console.log(compare('2','132'),'less');
console.log(compare('12','13'),'less');
console.log(compare('875','799'),'greater');
console.log(compare('1000','1000'),'equal');
console.log(compare('999','1000'),'less');
console.log(compare('123','122'),'greater');
console.log(compare('1000000000000000000000000000000000','1000000000000000000000000000000001'),'less');
console.log(compare('1000000000000000000000000000000002','1000000000000000000000000000000001'),'greater');
console.log(compare('0000000000000000000000000000000010000000000000000000000000000000000','0000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000001'),'greater');
console.log(compare('012','13'),'less');
console.log(compare('0000000.12','-120'),'greater');
console.log(compare('000000000000000876','000999'),'less');
console.log(compare('1000.00','1000'),'equal');
console.log(compare('999','-00000000000001000.00'),'greater');
console.log(compare('123.09','123.08'),'greater');
console.log(compare('-123.09','-123.08'),'less');
console.log(compare( '1000000000000000000000000000000002.00009','-1000000000000000000000000000000003'),'greater');
console.log(compare('2.40', '2.4'), 'equal');
console.log(compare('13.810', '13.701'), 'greater');
console.log(compare('13.000000001', '13.1000000000'), 'less');
