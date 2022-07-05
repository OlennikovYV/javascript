function nearestSq(n) {
  let minSqrt, maxSqrt;
  let minSquare, maxSquare;
  let minDiff, maxDiff;
  const sqrt = Math.sqrt(n);

  if (sqrt === n) return n;

  minSqrt = Math.floor(sqrt);
  maxSqrt = Math.ceil(sqrt);
  minSquare = minSqrt ** 2;
  maxSquare = maxSqrt ** 2;

  minDiff = n - minSquare;
  maxDiff = maxSquare - n;

  return minDiff <= maxDiff ? minSquare : maxSquare;
}

console.log(nearestSq(1)); // 1
console.log(nearestSq(2)); // 1
console.log(nearestSq(10)); // 9
console.log(nearestSq(111)); // 121
console.log(nearestSq(9999)); // 10000
