const isOperator = op => '+-*/'.includes(op);
const isNumber = num => Number.isNaN(Number(num)) === false;

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
};

function calculator(a, b, sign) {
  if (!isOperator(sign)) return 'unknown value';
  if (!isNumber(a) || !isNumber(b)) return 'unknown value';
  return calculate(a, b, sign);
}

console.log(calculator(1, 2, '+')); // 3
console.log(calculator(1, 2, '-')); // -1
console.log(calculator(3, 5, '*')); // 15
console.log(calculator(6, 2, '/')); // 3
console.log(calculator(6, 2, '$')); // 'unknown value'
console.log(calculator(6, 'h', '*')); // 'unknown value'
