function integrate(coefficient, exponent) {
  const num1 = exponent + 1;
  const num2 = coefficient / num1;

  return `${num2}x^${num1}`;
}

console.log(integrate(3, 2)); // '1x^3'
console.log(integrate(12, 5)); // '2x^6'
console.log(integrate(20, 1)); // '10x^2'
console.log(integrate(40, 3)); // '10x^4'
console.log(integrate(90, 2)); // '30x^3'
