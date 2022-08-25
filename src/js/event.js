function multiples(m, n) {
  return Array.from({ length: m }, (_, i) => n * (i + 1));
}

console.log(multiples(3, 5)); // [5, 10, 15]
