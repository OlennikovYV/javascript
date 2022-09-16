function prefill(n, v) {
  const numberN = parseInt(n);

  if (numberN != Math.abs(n) || n < 0) throw TypeError(`${n} is invalid`);

  return numberN ? Array(numberN).fill(v) : [];
}

console.log(prefill(0, 1)); // []
console.log(prefill(3, 1)); // [1, 1, 1]
console.log(prefill(2, 'abc')); // ['abc', 'abc']
console.log(prefill('1', 1)); // [1]
console.log(prefill(3, prefill(2, '2d')));
// [ ['2d', '2d'], ['2d', '2d'], ['2d', '2d'] ]

let errorThrown = false;
try {
  prefill('xyz', 1);
} catch (e) {
  console.log(e.name); // 'TypeError'
  console.log(e.message); // 'xyz is invalid'
  errorThrown = true;
} finally {
  console.log(errorThrown); // 'true'
}
