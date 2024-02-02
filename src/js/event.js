function matrixMultiplication(a, b) {
  return a.map(i => {
    return i.map((_, j) => {
      return i.reduce((sum, cellA, k) => {
        return sum + cellA * b[k][j];
      }, 0);
    });
  });
}

console.log(
  matrixMultiplication(
    [
      [1, 2],
      [3, 2],
    ],
    [
      [3, 2],
      [1, 1],
    ]
  )
);
// [
//   [5, 4],
//   [11, 8],
// ]
