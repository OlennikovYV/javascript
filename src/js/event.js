var repeatIt = function (str, n) {
  return typeof str === 'string' ? str.repeat(n) : 'Not a string';
};

console.log(repeatIt([], 3)); // 'Not a string'
console.log(repeatIt('*', 3)); // '***'
console.log(repeatIt('Hello', 11)); // 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
