// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(items) {
  // a place to store filtered results
  const filtered = [];

  // iterate over the array
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    // if the current item is a number
    if (typeof currentItem === 'number') {
      // push into filtered results
      filtered.push(currentItem);
    }
  }

  // return the filtered results
  return filtered;
}

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(items) {
  return items.filter((currentItem) => {
    return typeof currentItem === 'number';
  });
}