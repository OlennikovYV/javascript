function factorial(num) {
  let result = 1;

  if (num === 0) return 1;

  while (num > 0) {
    result *= num;
    num -= 1;
  }
  return result;
}

function sumFactorial(num) {
  let arrayDigit = String(num).split('');

  return arrayDigit.reduce((acc, el) => acc + factorial(+el), 0);
}

function strong(n) {
  return n == sumFactorial(n) ? 'STRONG!!!!' : 'Not Strong !!';
}

console.log(strong(1)); // "STRONG!!!!"
console.log(strong(2)); // "STRONG!!!!"
console.log(strong(145)); // "STRONG!!!!"
console.log(strong(7)); // "Not Strong !!"
console.log(strong(93)); // "Not Strong !!"
console.log(strong(185)); // "Not Strong !!"
