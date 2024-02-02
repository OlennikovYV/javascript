function matrixMultiplication(a, b) {
  const lengthMatrix = a.length;
  const resultMulMatrix = new Array(lengthMatrix);

  for (let i = 0; i < lengthMatrix; i++) {
    resultMulMatrix[i] = new Array(lengthMatrix);
    for (let j = 0; j < lengthMatrix; j++) {
      resultMulMatrix[i][j] = 0;
      for (let k = 0; k < lengthMatrix; k++) {
        resultMulMatrix[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return resultMulMatrix;
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
