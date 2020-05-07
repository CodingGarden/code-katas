function abbrevName(name) {
  // a place to store the first initial - initialized to the first letter in the name
  const firstInitial = name[0];
  // a place to store the second initial - initialized to the empty string
  let secondInitial = '';
  // iterate over the characters in the string - starting at the 2nd character
  for (let i = 1; i < name.length; i++) {
    const letter = name[i];
    // if the current character is a space
    if (letter === ' ') {
      // set the second initial to the next character
      secondInitial = name[i + 1];
      break;
    }
  }

  // return the first initial concatenated with a period concatenated with the second initial
  return firstInitial.toUpperCase() + '.' + secondInitial.toUpperCase();
}

function abbrevName(name) {
  const firstNameLastName = name.split(' ');
  const firstName = firstNameLastName[0];
  const lastName = firstNameLastName[1];
  const firstInitial = firstName[0];
  const lastInitial = lastName[0];
  return firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase();
}

function abbrevName(name) {
  const firstNameLastName = name.split(' ');
  return firstNameLastName[0][0].toUpperCase() + '.' + firstNameLastName[1][0].toUpperCase();
}

function abbrevName(name) {
  return name.split(' ')[0][0].toUpperCase() + '.' + name.split(' ')[1][0].toUpperCase();
}

function abbrevName(name) {
  const [firstName, lastName] = name.split(' ');
  const firstInitial = firstName[0];
  const lastInitial = lastName[0];
  return firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase();
}

function abbrevName(name) {
  const [{
    0: firstInitial
  }, {
    0: lastInitial
  }] = name.split(' ');
  return firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase();
}

function abbrevName(name) {
  const [[firstInitial], [lastInitial]] = name.split(' ');
  return firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase();
}

function abbrevName(name) {
  const firstNameLastName = name.split(' ');
  const firstName = firstNameLastName[0];
  const lastName = firstNameLastName[1];
  const firstInitial = firstName[0];
  const lastInitial = lastName[0];
  // return firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase();
  // return `${firstInitial}.${lastInitial}`.toUpperCase();
  return (firstInitial + '.' + lastInitial).toUpperCase();
}

function abbrevName(name) {
  return name.replace(/([a-z])[a-z]* ([a-z])[a-z]*/i, '$1.$2').toUpperCase();
}

console.log(abbrevName('Sam Harris'), 'S.H');
console.log(abbrevName('Patrick Feenan'), 'P.F');
console.log(abbrevName('Evan Cole'), 'E.C');
console.log(abbrevName('P Favuzzi'), 'P.F');
console.log(abbrevName('David Mendieta'), 'D.M');
console.log(abbrevName('david mendieta'), 'D.M');