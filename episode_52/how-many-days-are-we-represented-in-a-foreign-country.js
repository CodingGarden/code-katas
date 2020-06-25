// SCRAPPING THIS! Because we are not accounting for overlapping dates
function daysRepresented(trips){
  // a place to store the total amount of days, initialized to zero
  let totalDays = 0;
  // iterate over the array of trips
  for (let i = 0; i < trips.length; i++) {
    // subtract the departure day from the arrival day and add 1
    // const numDays = trips[i][1] - trips[i][0] + 1;
    const trip = trips[i];
    const departure = trip[1];
    const arrival = trip[0];
    const numDays = departure - arrival + 1;
    // increase total number of days by this amount
    totalDays += numDays;
  }
  // return total amount of days
  return totalDays;
}

function daysRepresented(trips) {
  // a place to store all of the days we have visited
  const daysVisited = {};
  // iterate over all the trips
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    const arrival = trip[0];
    const departure = trip[1];
    // iterate from the start date to the end date
    for (let day = arrival; day <= departure; day++) {
      // add the day to the visited days (if we have not already visited on that day)
      daysVisited[day] = true;
    }
  }
  
  // return number of days visited.
  return Object.keys(daysVisited).length;
}


function daysRepresented(trips) {
  const daysVisited = new Set();
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    const arrival = trip[0];
    const departure = trip[1];
    for (let day = arrival; day <= departure; day++) {
      daysVisited.add(day);
    }
  }

  return daysVisited.size;
}

function daysRepresented(trips) {
  const daysVisited = new Set();

  trips.forEach((trip) => {
    const arrival = trip[0];
    const departure = trip[1];
    for (let day = arrival; day <= departure; day++) {
      daysVisited.add(day);
    }
  });

  return daysVisited.size;
}

function daysRepresented(trips) {
  const daysVisited = new Set();

  trips.forEach(([arrival, departure]) => {
    for (let day = arrival; day <= departure; day++) {
      daysVisited.add(day);
    }
  });

  return daysVisited.size;
}

function daysRepresented(trips) {
  return trips.reduce((daysVisited, [arrival, departure]) => {
    for (let day = arrival; day <= departure; day++) {
      daysVisited.add(day);
    }
    return daysVisited;
  }, new Set()).size;
}

console.log(daysRepresented([[10,15],[25,35]]), 17);
console.log(daysRepresented([[2,8], [220,229],[10,16]]), 24);
console.log(daysRepresented([[2,8], [6,16], [17,26]]), 25);
