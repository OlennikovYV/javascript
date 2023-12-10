function mainDiagonalProduct(mat) {
  let mulDiagonal = 1;
  const maxLengthSide = Math.max(mat.length, mat[0].length);

  for (let i = 0; i < maxLengthSide; i++) mulDiagonal *= mat[i][i];

  return mulDiagonal;
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
