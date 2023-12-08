const isEven = function (n) {
  return Number.isInteger(n / 2);
};

console.log(isEven('%')); // falsse
console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(14)); // true
console.log(isEven(15)); // false
console.log(isEven(26)); // true
console.log(isEven(27)); // false
