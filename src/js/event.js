function multiples(m, n) {
  const result = [];
  for (let i = 1; i <= m; i += 1) {
    result.push(n * i);
  }

  return result;
}

console.log(multiples(3, 5)); // [5, 10, 15]
