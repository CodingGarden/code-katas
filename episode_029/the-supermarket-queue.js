function queueTime(customers, n) {
  // a place to store the total amount of time, initialized to 0
  let totalTime = 0;
  // a place to store the current wait time for each cashier
  let tills = Array(n).fill(0);
  
  while (customers.length || tills.some(till => till > 0)) {
    // find an open cashier
    let tillIndex = tills.indexOf(0);
    while (tillIndex !== -1) {
      // if open cashier - remove first customer from queue and set at cashier
      // advance queue to open cashiers (open cashier is 0)
      const currentCustomer = customers.shift();
      tills[tillIndex] = currentCustomer;
      tillIndex = tills.indexOf(0);
    }
    
    // move total time forward by 1
    totalTime += 1;
    // decrease the time remaining at all cashiers by 1
    tills.forEach((till, index) => {
      if (till > 0) {
        tills[index] -= 1;
      }
    });
  }

  // return total amount of time
  return totalTime;
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1,2,3,4], 1), 10);
console.log(queueTime([2,2,3,3,4,4], 2), 9);
console.log(queueTime([1,2,3,4,5], 100), 5);