function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  const isSantaName = name === 'Santa Claus';
  const isSantaPassword = password === 'Ho Ho Ho!';

  return isSantaName && isSantaPassword;
};

const sleigh = new Sleigh();

console.log(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')); // true
console.log(sleigh.authenticate('Santa', 'Ho Ho Ho!')); // false
console.log(sleigh.authenticate('Santa Claus', 'Ho Ho!')); // false
console.log(sleigh.authenticate('jhoffner', 'CodeWars')); // false
