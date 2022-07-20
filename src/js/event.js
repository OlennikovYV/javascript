function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  return this.draft - this.crew * 1.5 > 20;
};

let emptyShip = new Ship(0, 0);
console.log(emptyShip.isWorthIt()); // false
emptyShip = new Ship(15, 20);
console.log(emptyShip.isWorthIt()); // false
emptyShip = new Ship(35, 20);
console.log(emptyShip.isWorthIt()); // false
emptyShip = new Ship(100, 20);
console.log(emptyShip.isWorthIt()); // false
