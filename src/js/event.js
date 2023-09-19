const calculate = function calculate(a, o, b) {
  switch (o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : null;
    default:
      return null;
  }
};

console.log(calculate(2, '+', 4)); // 6
console.log(calculate(6, '-', 1.5)); // 4.5
console.log(calculate(-4, '*', 8)); // -32
console.log(calculate(49, '/', -7)); // -7
console.log(calculate(8, 'm', 2)); // null
console.log(calculate(4, '/', 0)); // null
