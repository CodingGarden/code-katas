class Pokemon {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }

  takeDamage(pokemon) {
    this.health -= pokemon.damagePerAttack;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  hasFainted() {
    return this.health <= 0;
  }
}

function declareWinner(pokemon1, pokemon2) {
  let currentAttacker = pokemon1;
  let currentDefender = pokemon2;
  while (!currentDefender.hasFainted() && !currentAttacker.hasFainted()) {
    currentDefender.takeDamage(currentAttacker);
    if (currentDefender.hasFainted()) {
      return currentAttacker.name;
    }
    [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
  }
}

function declareWinner(pokemon1, pokemon2) {
  let currentAttacker = pokemon2;
  let currentDefender = pokemon1;
  do {
    [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
    currentDefender.takeDamage(currentAttacker);
  } while (!currentDefender.hasFainted() && !currentAttacker.hasFainted());
  return currentAttacker.name;
}

console.log(declareWinner(new Pokemon('Mew', 10, 2), new Pokemon('Zapdos', 5, 4)), 'Mew');

console.log(declareWinner(new Pokemon('Clefairy', 20, 5), new Pokemon('Zapdos', 5, 4)), 'Clefairy');

console.log(declareWinner(new Pokemon('Clefairy', 20, 5), new Pokemon('Zapdos', 5, 4)), 'Clefairy');

console.log(declareWinner(new Pokemon('Jerry', 30, 3), new Pokemon('Clefairy', 20, 5)), 'Clefairy');
  