function transpose(matrix) {
  return matrix[0].map((_, index) => matrix.map(row => row[index]));
}

console.log(transpose([[1]])); // [[1]]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
// [ [1, 4], [2, 5], [3, 6] ]
