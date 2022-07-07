function stockList(listOfArt, listOfCat){
  // a place to keep track of the quantities for each category
  const categories = new Map();
  // iterate over categories
  listOfCat.forEach((category) => {
    // set category count to 0
    categories.set(category, 0);
  });
  // iterate over the list of items
  listOfArt.forEach((art) => {
    // split current item on space to get category code and quantity
    const [code, quantity] = art.split(' ');
    const [category] = code;
    // if the category code exists
    if (categories.has(category)) {
      // increase quantity at given category based on first letter
      categories.set(category, categories.get(category) + Number(quantity));
    }
  });
  // a place to store the output string
  let output = '';
  const lastCategory = listOfCat.at(-1);
  // iterate over the keys+values of the quantities variable
  for (const [category, quantity] of categories.entries()) {
    // append the formated key+value to the output string
    output += `(${category} : ${quantity})`;
    // (with a trailing dash if this is not the last key+value)
    if (category !== lastCategory) {
      output += ' - ';
    }
  }
  return output;
}

function stockList(listOfArt, listOfCat){
  if (!listOfArt.length) return '';
  const categories = new Map();
  listOfCat.forEach((category) => {
    categories.set(category, 0);
  });
  listOfArt.forEach((art) => {
    const [[category], quantity] = art.split(' ');
    if (categories.has(category)) {
      categories.set(category, categories.get(category) + Number(quantity));
    }
  });
  let output = '';
  const lastCategory = listOfCat[listOfCat.length - 1];
  for (const [category, quantity] of categories.entries()) {
    output += `(${category} : ${quantity})`;
    if (category !== lastCategory) {
      output += ' - ';
    }
  }
  return output;
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(
  stockList(b, c),
  res
);

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(
  stockList(b, c),
  res
);
