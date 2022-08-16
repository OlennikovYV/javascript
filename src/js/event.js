var FilterString = function (value) {
  return Number(value.replace(/\D/g, ''));
};

console.log(FilterString('123')); // 123
console.log(FilterString('a1b2c3')); // 123
console.log(FilterString('aa1bb2cc3dd')); // 123
