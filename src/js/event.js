function calculate(num1, operation, num2) {
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      num2 === 0 ? (result = null) : (result = num1 / num2);
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }

  return result;
}

console.log(calculate(3.2, '+', 8)); // 11.2
console.log(calculate(3.2, '-', 8)); // -4.8
console.log(calculate(3.2, '/', 8)); // 0.4
console.log(calculate(3.2, '*', 8)); // 25.6
console.log(calculate(-3, '+', 0)); // -3
console.log(calculate(-3, '-', 0)); // -3
console.log(calculate(-3, '/', 0)); // null
console.log(calculate(-3, '*', 0)); // 0
console.log(calculate(-3, 'w', 0)); // null
