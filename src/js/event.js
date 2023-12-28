function calculateString(st) {
  let result;
  const expression = st.replaceAll(/[^0-9\.+\-\*\/]/gi, '');
  const operator = [...expression]
    .filter(char => ['+', '-', '*', '/'].includes(char))
    .join('');
  let [value1, value2] = expression.split(operator);

  value1 = Number(value1);
  value2 = Number(value2);

  switch (operator) {
    case '+':
      result = Math.round(value1 + value2);
      break;
    case '-':
      result = Math.round(value1 - value2);
      break;
    case '*':
      result = Math.round(value1 * value2);
      break;
    case '/':
      result = Math.round(value1 / value2);
      break;
  }

  return result.toString();
}

console.log(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000')); // '47'
console.log(calculateString('sdfsd23454sdf*2342')); // '54929268'
console.log(calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442')); // '-210908'
console.log(calculateString('fsdfsd234.4554s4234df+sf234442')); // '234676'
console.log(calculateString('a1a2b3c.c0c/a1a0b.cc00c')); // '12'
