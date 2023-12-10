function mainDiagonalProduct(mat) {
  return mat.reduce((mulDiagonal, row, index) => mulDiagonal * row[index], 1);
}

const arr1 = [
  [1, 0],
  [0, 1],
];
console.log(mainDiagonalProduct(arr1)); // 1

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(mainDiagonalProduct(arr2)); // 45
