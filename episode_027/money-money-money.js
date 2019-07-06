function calculateYears(principal, interest, tax, desired) {
  // if principal is equal to desired
  if (principal === desired) {
    return 0;
  }

  // a place to store the number of years - initialized to zero
  let years = 0;
  // iterate until principal is greater than or equal to the desired
  while (principal < desired) {
    // calculate interest from principal + total interest gained
    let totalInterestGained = principal * interest;
    // calcuate tax from total interest gained
    let totalTax = totalInterestGained * tax;
    principal = principal + (totalInterestGained - totalTax);
    // increment number of years
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000,0.01625,0.18,1200), 14);
console.log(calculateYears(1000,0.05,0.18,1000), 0);