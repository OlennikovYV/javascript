function breakChocolate(n, m) {
  const count = n * m - 1;
  return count > 0 ? count : 0;
}

console.log(breakChocolate(5, 5)); // 24
console.log(breakChocolate(1, 1)); // 0
