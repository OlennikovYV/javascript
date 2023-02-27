function min(a, b) {
  if (isNaN(a) || isNaN(b)) return NaN;

  return a < b ? Number(a) : Number(b);
}

console.log(min(1, -2.5) === -2.5); // -2.5
console.log(min(1.5, NaN)); // NaN
console.log(min(1.5, undefined)); // NaN
console.log(min(-Infinity, Infinity) === -Infinity); // -Infinity
console.log(min(null, 2.5) === 0); // 'treat null as if it were 0'
