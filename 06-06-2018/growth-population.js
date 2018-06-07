// 1000 + 1000 * 0.02 + 50 // formula

function nbYear(p0, percent, aug, p) {
  // a place to store the number of years, start at 0
  let totalYears = 0;

  const getNextPopulation = current => current + (current * percent/100) + aug;

  // while population is less than or equal to p
  while(p0 < p) {
    // calculate population with formula
    p0 = getNextPopulation(p0);
    // increase the year counter
    totalYears++;
  }

  return totalYears;
}

function nbYear(p0, percent, aug, p) {
  const getNextPopulation = current => current + (current * percent / 100) + aug;

  if (p0 < p) {
    const nextPopulation = getNextPopulation(p0);
    return 1 + nbYear(nextPopulation, percent, aug, p);
  }

  return 0;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);