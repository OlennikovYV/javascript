function triangular(n) {
  return n > 0 ? (n * n + n) / 2 : 0;
}

console.log(triangular(2)); // 3
console.log(triangular(4)); // 10
