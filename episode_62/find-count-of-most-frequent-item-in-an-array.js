function mostFrequentItemCount(collection) {
  // a place to store the number of occurrences
  const counts = {};
  // a variable to store the current highest count item
  let currentHighest;
  // iterate over the collection
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    // if the item has been seen before
    if (counts[item]) {
      // increment the stored count
      counts[item] += 1;
    } else {
      // add this item to the number of occurrences variable
      // set the count to 1
      counts[item] = 1;
    }
    // if the count for this item is larger than the current highest count item, replace it
    if (!currentHighest || currentHighest < counts[item]) {
      currentHighest = counts[item];
    }
  }
  // return the highest count
  return currentHighest;
}

function mostFrequentItemCount(collection) {
  const counts = {};
  let currentHighest = 0;
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
    if (currentHighest < counts[item]) {
      currentHighest = counts[item];
    }
  }

  return currentHighest;
}

function mostFrequentItemCount(collection) {
  const counts = {};
  let currentHighest = 0;
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    // check if property exists in an object...
    // if (counts[item]) {
    // if (counts.hasOwnProperty(item)) {
    // if (Object.prototype.hasOwnProperty.call(counts, item)) {
    if (Object.hasOwn(counts, item)) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
    if (currentHighest < counts[item]) {
      currentHighest = counts[item];
    }
  }

  return currentHighest;
}

function mostFrequentItemCount(collection) {
  const counts = {};
  let currentHighest = 0;
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    // counts[item] = (counts[item] || 0) + 1;
    counts[item] = (Object.hasOwn(counts, item) ? counts[item] : 0) + 1;
    if (currentHighest < counts[item]) {
      currentHighest = counts[item];
    }
  }

  return currentHighest;
}

function mostFrequentItemCount(collection) {
  const counts = new Map();
  let currentHighest = 0;
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    counts.set(item, (counts.get(item) || 0) + 1);
    if (currentHighest < counts.get(item)) {
      currentHighest = counts.get(item);
    }
  }

  return currentHighest;
}

function mostFrequentItemCount(collection) {
  const counts = new Map();
  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i];
    counts.set(item, (counts.get(item) || 0) + 1);
  }

  return Math.max(...counts.values());
}

function mostFrequentItemCount(collection) {
  const counts = new Map();
  collection.forEach((item) => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });
  return Math.max(...[...counts.values()]);
}

function mostFrequentItemCount(collection) {
  return Math.max(...collection.reduce((counts, item) => {
    counts.set(item, (counts.get(item) || 0) + 1);
    return counts;
  }, new Map()).values());
}

console.log(
  mostFrequentItemCount([3, -1, -1]),
  2
);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
  5
);