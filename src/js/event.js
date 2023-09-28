Array.prototype.all = function (p) {
  return true === this.reduce((bool, elem) => bool && p(elem), true);
};

Array.prototype.none = function (p) {
  return false === this.reduce((bool, elem) => bool || p(elem), false);
};

Array.prototype.any = function (p) {
  return true === this.reduce((bool, elem) => bool || p(elem), false);
};

const isGreaterThanZero = number => number > 0;
const isLessThanZero = number => number < 0;

console.log([1, 2, 3].all(isGreaterThanZero)); // True
console.log([-1, 0, 2].all(isGreaterThanZero)); // False

console.log([-1, 2, 3].none(isLessThanZero)); // False
console.log([-1, -2, -3].none(isGreaterThanZero)); // True

console.log([-1, 2, 3].any(isGreaterThanZero)); // True
console.log([-1, -2, -3].any(isGreaterThanZero)); // False
