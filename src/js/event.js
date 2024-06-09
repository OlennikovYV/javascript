function transpose(matrix) {
  const lengthX = matrix[0].length;
  const lengthY = matrix.length;
  const transposeMatrix = Array.from({ length: lengthX }, el =>
    Array.from({ length: lengthY }, el => 0)
  );

  for (let i = 0; i < lengthY; i++)
    for (let j = 0; j < lengthX; j++) {
      transposeMatrix[j][i] = matrix[i][j];
    }

  return transposeMatrix;
}

console.log(transpose([[1]])); // [[1]]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
// [ [1, 4], [2, 5], [3, 6] ]
