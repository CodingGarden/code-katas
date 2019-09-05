// menu items
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

const menuItems = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];

const menuIndexes = menuItems.reduce((all, item, i) => {
  all[item] = i;
  return all;
}, {});

function getOrder(input) {
  // iterate over menu items
  menuItems.forEach(menuItem => {
    // replace the occurence of the current menu item (lowercase) with
      // capitalized menu item with spaces on both sides in the input
    const regexp = new RegExp(menuItem.toLowerCase(), 'g');
    input = input.replace(regexp, ` ${menuItem} `);
  });

  // trim and split on double space
  const order = input.trim().split('  ').sort((a, b) => {
    return menuIndexes[a] - menuIndexes[b];
  });

  // return the trimmed result
  return order.join(' ');
}

function getOrder(input) {
  return menuItems.reduce((orderString, menuItem) => {
    const regexp = new RegExp(menuItem.toLowerCase(), 'g');
    const orderItems = input.match(regexp);
    if (orderItems) {
      return orderString + ' ' + (menuItem + ' ').repeat(orderItems.length).trim();
    }
    return orderString.trim();
  }, '');
}

function getOrder(input) {
  return menuItems.reduce((orderString, menuItem) => {
    const regexp = new RegExp(menuItem.toLowerCase(), 'g');
    const orderItems = input.match(regexp);
    if (orderItems) {
      return `${orderString} ${(menuItem + ' ').repeat(orderItems.length).trim()}`;
    }
    return orderString.trim();
  }, '').trim();
}

const order = {};
const itemMapping = menuItems.reduce(
  (p, n, i) => ((order[n] = i), (p[n.toLowerCase()] = n), p),
  {}
);

// thanks to Alca!!!
function getOrder(input) {
  return input
    .split('')
    .reduce(
      ([partialItem, orderedArray], letter) => {
        const orderItem = partialItem + letter;
        const menuItem = itemMapping[orderItem];
        if (menuItem) {
          const index = order[menuItem];
          orderedArray[index] += ' ' + menuItem;
          partialItem = '';
        } else {
          partialItem += letter;
        }
        return [partialItem, orderedArray];
      },
      ['', menuItems.slice().fill('')]
    )[1]
    .join('')
    .trim();
}

// const getOrder = input => input.split('').reduce((p, n, _, a, v = p[0] + n, m = itemMapping[v]) => (m ? (p[1][order[m]] += ' ' + m, p[0] = '') : p[0] += n, p), [ '', menuItems.slice().fill('') ])[1].join('').trim();

const result1 = getOrder(
  'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'
);
console.log(result1);
console.log(
  result1 ===
    'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke'
);
// const result2 = getOrder('pizzachickenfriesburgercokemilkshakefriessandwich');
// console.log(result2);
// console.log('Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke');
