// class Fighter {
//   constructor(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//   }

//   attack(fighter) {
//     fighter.takeDamage(this.damagePerAttack);
//   }

//   takeDamage(damage) {
//     this.health -= damage;
//   }

//   isAlive() {
//     return this.health > 0;
//   }
// }

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;

  this.toString = function() { return this.name; };

  // this.attack = (fighter) => {
  //   fighter.takeDamage(this.damagePerAttack);
  // };

  // this.takeDamage = (damage) => {
  //   this.health -= damage;
  // };

  // this.isAlive = () => {
  //   return this.health > 0;
  // };
}

Fighter.prototype.attack = function(fighter) {
  fighter.takeDamage(this.damagePerAttack);
};

Fighter.prototype.takeDamage = function(damage) {
  this.health -= damage;
};

Fighter.prototype.isAlive = function() {
  return this.health > 0;
};

function declareWinner(fighter1, fighter2, firstAttackerName) {
  let currentAttacker = fighter1;
  let currentDefender = fighter2;
  if (fighter1.name !== firstAttackerName) {
    currentAttacker = fighter2;
    currentDefender = fighter1;
  }
  
  while(fighter1.health > 0 && fighter2.health > 0) {
    currentAttacker.attack(currentDefender);
    if (!currentDefender.isAlive()) return currentAttacker.name;
    [currentDefender, currentAttacker] = [currentAttacker, currentDefender];
  }
}

console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'), 'Lew');
console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'), 'Harry');
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'), 'Harald');
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harald'), 'Harald');
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'), 'Harald');
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Harald'), 'Harald');