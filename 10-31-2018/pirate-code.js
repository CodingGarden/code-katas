function amaroPlan(pirateNum){
  // a place to store the gold
  const gold = [];
  const totalGold = pirateNum * 20;

  // iterate up to the number of pirates
  for (let i = 0; i < pirateNum; i++) {
    // if initial index
    if (i === 0) {
      // push total gold - (number of pirates - 1) / 2 - drop remainder
      const amaroGold = totalGold - Math.floor((pirateNum - 1) / 2);
      gold.push(amaroGold);
    } else if (i % 2 === 0) {
      // if index is even push 1
      gold.push(1);
    } else {
      // else push 0
      gold.push(0);
    }
  }

  return gold;

}

function amaroPlan(pirateNum){
  const gold = [];
  const totalGold = pirateNum * 20;

  const amaroGold = totalGold - Math.floor((pirateNum - 1) / 2);
  gold.push(amaroGold);
  for (let i = 1; i < pirateNum; i++) {
    gold.push((i + 1) % 2);
  }

  return gold;
}

function amaroPlan(pirateNum) {
  const gold = [];
  let remainingGold = pirateNum * 20;
  for (let i = pirateNum - 1; i >= 1; i--) {
    const ammount = (i + 1) % 2;
    remainingGold -= ammount;
    gold[i] = ammount;
  }
  gold[0] = remainingGold;
  return gold;
}

function amaroPlan(pirateNum) {
  return Array.from({ length: pirateNum }, (_, i) => {
    if (i === 0) {
      return pirateNum * 20 - Math.floor((pirateNum - 1) / 2);
    } else {
      return (i + 1) % 2;
    }
  });
}

function amaroPlan(pirateNum) {
  return Array.from({ length: pirateNum }, (_, i) => i === 0 ? pirateNum * 20 - Math.floor((pirateNum - 1) / 2) : (i + 1) % 2);
}

console.log(amaroPlan(2), [40, 0]);
console.log(amaroPlan(3), [59, 0, 1]);
console.log(amaroPlan(4), [79, 0, 1, 0]);
console.log(amaroPlan(5), [98, 0, 1, 0, 1]);