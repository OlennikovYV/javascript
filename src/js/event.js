Array.range = function (start, count) {
  return Array.from({ length: count }, (_, i) => start + i);
};

Array.prototype.sum = function () {
  return this.reduce((sum, num) => sum + num, 0);
};

console.log(Array.range(1, 3)); // [1, 2, 3]
console.log(Array.range(-1, 1)); // [-1]
console.log(Array.range(-3, 5)); // [-3, -2, -1, 0, 1]
console.log(Array.range(0, 0)); // []
console.log(Array.range(1, 0)); // []

console.log([].sum()); // 0
console.log([-2, -1, -5].sum()); // -8
console.log([-3, -2, -1, 0, 1, 2, 3].sum()); // 0
