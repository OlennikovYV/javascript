function amIWilson(p) {
  let primeWilson;
  const factorial = n => (n ? n * factorial(n - 1n) : 1n);

  p = BigInt(p);
  primeWilson = factorial(p - 1n) + 1n;

  return !(primeWilson % (p * p));
}

console.log(amIWilson(5)); // true
console.log(amIWilson(9)); // false
console.log(amIWilson(6)); // false
console.log(amIWilson(30)); // false
console.log(amIWilson(697)); // false
console.log(amIWilson(562)); // false
console.log(amIWilson(563)); // true
