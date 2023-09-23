function generatePairs(n) {
  const pairs = [];

  for (i = 0; i <= n; i++)
    for (j = 0; j <= n; j++) {
      if (i <= j) pairs.push([i, j]);
    }

  return pairs;
}

console.log(generatePairs(2));
// [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
