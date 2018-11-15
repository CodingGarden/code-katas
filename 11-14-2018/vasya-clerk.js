function tickets(peopleInLine){
  // need a cash register (place to keep track of bills we have)
  const register = {
    25: 0,
    50: 0,
    100: 0
  };
  // iterate over the line
  for (let i = 0; i < peopleInLine.length; i++) {
    const payment = peopleInLine[i];
    // check if cash register has enough change
    if (payment === 25) {
      register[payment]++;
    } else if (payment === 50 && register[25] > 0) {
      register[25]--;
      register[payment]++;
    } else if (payment === 100) {
      if (register[25] > 0 && register[50] > 0) {
        register[25]--;
        register[50]--;
        register[payment]++;
      } else if (register[25] > 2) {
        register[25] -= 3;
        register[payment]++;
      } else {
        return 'NO';
      }
    } else {
      return 'NO';
    }
  }
  return 'YES';
}

function tickets(peopleInLine){
  // need a cash register (place to keep track of bills we have)
  const register = {
    25: 0,
    50: 0,
    100: 0
  };
  return peopleInLine.every(payment => {
    if (payment === 25) {
      register[payment]++;
    } else if (payment === 50 && register[25] > 0) {
      register[25]--;
      register[payment]++;
    } else if (payment === 100) {
      if (register[25] > 0 && register[50] > 0) {
        register[25]--;
        register[50]--;
        register[payment]++;
      } else if (register[25] > 2) {
        register[25] -= 3;
        register[payment]++;
      } else {
        return false;
      }
    } else {
      return false;
    }
    return true;
  }) ? 'YES' : 'NO';
}

function tickets(peopleInLine){
  // need a cash register (place to keep track of bills we have)
  const register = {
    25: 0,
    50: 0,
    100: 0
  };
  return peopleInLine.reduce((valid, payment) => {
    if (payment === 25) {
      register[payment]++;
    } else if (payment === 50 && register[25] > 0) {
      register[25]--;
      register[payment]++;
    } else if (payment === 100) {
      if (register[25] > 0 && register[50] > 0) {
        register[25]--;
        register[50]--;
        register[payment]++;
      } else if (register[25] > 2) {
        register[25] -= 3;
        register[payment]++;
      } else {
        return 'NO';
      }
    } else {
      return 'NO';
    }
    return valid != 'NO' ? 'YES' : 'NO';
  }, '');
}

function tickets(peopleInLine){
  const register = {
    25: [],
    50: [],
    100: []
  };
  for (let i = 0; i < peopleInLine.length; i++) {
    const payment = peopleInLine[i];
    let canMakeChange = true;
    if (payment === 50 && register[25].length > 0) {
      register[25].pop();
    } else if (payment === 100) {
      if (register[25].length > 0 && register[50].length > 0) {
        register[25].pop();
        register[50].pop();
      } else if (register[25].length > 2) {
        register[25].pop();
        register[25].pop();
        register[25].pop();
      } else {
        return 'NO';
      }
    } else if (payment != 25) {
      return 'NO';
    }
    if (canMakeChange) {
      register[payment].push(0);
    }
  }
  return 'YES';
}

function tickets(peopleInLine){
  // need a cash register (place to keep track of bills we have)
  const register = {
    25: 0,
    50: 0,
    100: 0
  };
  // iterate over the line
  for (let i = 0; i < peopleInLine.length; i++) {
    const payment = peopleInLine[i];
    // check if cash register has enough change
    const result = {
      25: () => {},
      50: () => {
        if (register[25] > 0) {
          register[25]--;
        } else {
          return 'NO';
        }
      },
      100: () => {
        if (register[25] > 0 && register[50] > 0) {
          register[25]--;
          register[50]--;
        } else if (register[25] > 2) {
          register[25] -= 3;
        } else {
          return 'NO';
        }
      }
    }[payment]();

    if (result === 'NO') { 
      return 'NO';
    } else {
      register[payment]++;
    }
  }
  return 'YES';
}

function tickets(peopleInLine, register = {
  25: 0,
  50: 0,
  100: 0
}){
  const checkPayment = {
    25: () => true,
    50: () => {
      if (register[25] > 0) {
        register[25]--;
        return true;
      } else {
        return false;
      }
    },
    100: () => {
      if (register[25] > 0 && register[50] > 0) {
        register[25]--;
        register[50]--;
      } else if (register[25] > 2) {
        register[25] -= 3;
      } else {
        return false;
      }

      return true;
    }
  };
  return peopleInLine.every(payment => (checkPayment[payment]() && (register[payment]++, true))) ? 'YES' : 'NO';
}

// const tickets = (peopleInLine) => peopleInLine.reduce(({ v, s, m }, c) => ({ v: v && (c === 25 ? ++s : (((s -= (c === 50 ? (m++, 1) : m ? (m--, 1) : 3)) < 0) ? 0 : 1)), s, m}), { v: 1, s: 0, m: 0 }).v ? "YES" : "NO";

console.log(tickets([50]), 'NO');
console.log(tickets([25, 25, 50, 50]), 'YES');
console.log(tickets([25, 100]), 'NO');
console.log(tickets([25, 25, 50, 50, 100]), 'NO');
