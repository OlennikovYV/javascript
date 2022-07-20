function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  const weightMan = 1.5;
  const loot = this.draft - this.crew * weightMan > 20;

  return loot;
};

let emptyShip = new Ship(0, 0);
console.log(emptyShip.isWorthIt()); // false
emptyShip = new Ship(15, 20);
console.log(emptyShip.isWorthIt()); // false
emptyShip = new Ship(35, 20);
console.log(emptyShip.isWorthIt()); // false
emptyShip = new Ship(100, 20);
console.log(emptyShip.isWorthIt()); // false
