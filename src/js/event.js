function min(a, b) {
  a === null && (a = 0);
  b === null && (b = 0);

  if (isNaN(a) || isNaN(b)) return NaN;

  return a < b ? a : b;
}

console.log(min(1, -2.5) === -2.5); // -2.5
console.log(min(1.5, NaN)); // NaN
console.log(min(1.5, undefined)); // NaN
console.log(min(-Infinity, Infinity) === -Infinity); // -Infinity
console.log(min(null, 2.5) === 0); // 0
