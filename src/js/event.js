function sumMul(n, m) {
  let sum = 0;

  if (m <= 0 || n <= 0) return 'INVALID';

  for (let i = 0; i < m; i += 1) {
    if (i % n === 0) sum += i;
  }

  return sum;
}

console.log(sumMul(0, 0)); //  'INVALID'
console.log(sumMul(2, 9)); //  20
console.log(sumMul(4, -7)); //  'INVALID'
