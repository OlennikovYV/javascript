function triangular(n) {
  return n > 0 ? (1 / 2) * n * (n + 1) : 0;
}

console.log(triangular(2)); // 3
console.log(triangular(4)); // 10
