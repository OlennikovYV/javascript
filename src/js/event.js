function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    const countRound1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    const countRound2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

    return countRound1 > countRound2 ?
        fighter1.name :
        countRound2 > countRound1 ? fighter2.name : firstAttacker;
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); // "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")); // "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")); // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")); // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")); // "Harald"