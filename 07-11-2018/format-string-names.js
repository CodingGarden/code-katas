function list(names) {
  // a place to store the sentence
  let sentence = '';
  // iterate over the names
  for (let i = 0; i < names.length; i++) {
    const { name } = names[i];
    // if the current index is the last index,
    if (i == names.length - 1) {
      // append the name to the sentence with nothing after
      sentence += name;
    } else if (i == names.length - 2) {
      // if the current index is the second to last index, 
      // append the name to the sentence with an & after
      sentence += name + ' & ';
    } else {
      // otherwise append the name with a comma after
      sentence += name + ', ';
    }
  }
  // return the sentence
  
  return sentence;
}

function list(names) {
  return names.reduce((sentence, { name }, i) => {
    if (i == names.length - 1) {
      return sentence + name;
    } else if (i == names.length - 2) {
      return sentence + name + ' & ';
    } else {
      return sentence + name + ', ';
    }
  }, '');
}

function list(names) {
  return names.map(({ name }, i) => {
    if (i == names.length - 1) {
      return name;
    } else if (i == names.length - 2) {
      return name + ' & ';
    } else {
      return name + ', ';
    }
  }).join('');
}

function list(names) {
  let allnames = names
    .map(person => person.name)
    .join(', ');

  if (names.length > 1) {
    const lastCommaIndex = allnames.lastIndexOf(',');
    allnames = allnames.substring(0, lastCommaIndex) + ' &' + allnames.substring(lastCommaIndex + 1);
  }
  
  return allnames;
}

function list(names) {
  let allnames = names
    .map(person => person.name)
    .join(', ');

  if (names.length > 1) {
    const lastCommaIndex = allnames.lastIndexOf(',');
    const replacedNames = allnames.split('');
    replacedNames.splice(lastCommaIndex, 1, ' &');
    allnames = replacedNames.join('');
  }

  return allnames;
}

console.log(list([{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}, {
  name: 'Homer'
}, {
  name: 'Marge'
}]), 'Bart, Lisa, Maggie, Homer & Marge',
'Must work with many names');

console.log(list([{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}]), 'Bart, Lisa & Maggie',
'Must work with many names');

console.log(list([{
  name: 'Bart'
}, {
  name: 'Lisa'
}]), 'Bart & Lisa',
'Must work with two names');

console.log(list([{
  name: 'Bart'
}]), 'Bart', 'Wrong output for a single name');

console.log(list([]), '', 'Must work with no names');