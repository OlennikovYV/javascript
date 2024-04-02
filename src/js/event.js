Array.prototype.sort = function () {
  if (this.length < 2) return this;

  const first = this[0];
  const rest = this.slice(1);
  const lte = rest.filter(x => x <= first).sort();
  const gt = rest.filter(x => x > first).sort();

  return lte.concat([first]).concat(gt);
};

console.log([9, 7, 2, 4, 5, 3, 6, 8, 1].sort());
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
