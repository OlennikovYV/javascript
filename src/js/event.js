Array.prototype.all = function (p) {
  return this.filter(p).length === this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length === 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};

const isGreaterThanZero = number => number > 0;
const isLessThanZero = number => number < 0;

console.log([1, 2, 3].all(isGreaterThanZero)); // True
console.log([-1, 0, 2].all(isGreaterThanZero)); // False

console.log([-1, 2, 3].none(isLessThanZero)); // False
console.log([-1, -2, -3].none(isGreaterThanZero)); // True

console.log([-1, 2, 3].any(isGreaterThanZero)); // True
console.log([-1, -2, -3].any(isGreaterThanZero)); // False
