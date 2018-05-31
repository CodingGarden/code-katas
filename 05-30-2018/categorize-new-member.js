// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// senior >= 55
// -2 to +26;
function openOrSenior(data) {
  // an array to store the categories
  const categories = [];

  // iterate over the data
  for (let i = 0; i < data.length; i++) {
    const member = data[i];
    const age = member[0];
    const handicap = member[1];
    // check if the current item index 0 is greater than or equal to 55
    if (age >= 55 && handicap > 7) {
      categories.push('Senior');
    } else {
      categories.push('Open');
    }
  }

  return categories;
}

// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return 'Senior';
    } else {
      return 'Open';
    }
  });
}

function openOrSenior(data) {
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}