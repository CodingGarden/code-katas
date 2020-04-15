function evaporator(content, evap_per_day, threshold){
  // content - total / everything we have
  // evap_per_day - percentage lost everyday
  const thresholdPercentage = (threshold / 100);
  const evaporationPercentage = (evap_per_day / 100);
  // a place to store the minimum threshold value (as a measurement, not perecent)
  const minimumThresholdValue = content * thresholdPercentage;
  
  // a place to store the total number of days - initialized to 0
  let totalDays = 0;
  // loop until the current total is greather than or equal to the stored minimum threshold value
  while (content >= minimumThresholdValue) {
    // subtract the percentage evaporated from the current total
    content -= (content * evaporationPercentage)
    // increment total number of days
    totalDays++;
  }

  // return total number of days
  return totalDays; 
}

function evaporator(content, evap_per_day, threshold) {  
  const thresholdPercentage = (threshold / 100);
  const evaporationPercentage = (evap_per_day / 100);
  const minimumThresholdValue = content * thresholdPercentage;
  
  let totalDays = 0;
  while (content >= minimumThresholdValue) {
    content -= (content * evaporationPercentage)
    totalDays++;
  }
  return totalDays; 
}

function evaporator(content, evap_per_day, threshold) {
  return Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));
}

console.log(evaporator(10, 10, 10), 22);

// contentthreshold/100 >= content(1 - evap_per_day/100)^x, you need to find x

// I think the answer is Math.ceil(Math.E ** (Math.log(threshold / content) / (1 - evap_per_day/100)) because you want the smallest N for which content * (1-evap_per_day/100)**N <= threshold


// If you really want a one liner here you go. You don't actually need to know content because you start out at 100 percent and just use percentages. return Math.ceil(Math.log(threshold / 100) / Math.log((100 - evap_per_day) / 100));

