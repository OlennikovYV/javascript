var Ghost = function () {
  this.colors = ['white', 'yellow', 'purple', 'red'];
  this.color = this.colors[Math.floor(Math.random() * 4)];
};

console.log(new Ghost().color);
console.log(new Ghost().color);
console.log(new Ghost().color);
console.log(new Ghost().color);
console.log(new Ghost().color);
