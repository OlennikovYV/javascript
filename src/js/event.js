function Sleigh() {
  this.SantaName = 'Santa Claus';
  this.SantaPassword = 'Ho Ho Ho!';
}

Sleigh.prototype.authenticate = function (name, password) {
  return this.SantaName === name && this.SantaPassword === password;
};

const sleigh = new Sleigh();

console.log(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')); // true
console.log(sleigh.authenticate('Santa', 'Ho Ho Ho!')); // false
console.log(sleigh.authenticate('Santa Claus', 'Ho Ho!')); // false
console.log(sleigh.authenticate('jhoffner', 'CodeWars')); // false
