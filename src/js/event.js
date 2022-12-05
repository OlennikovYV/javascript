function sumSquares(array) {
  return array.reduce((acc, num) => acc + Math.pow(num, 2), 0);
}

console.log(sumSquares([1, 2, 3, 4, 5])); // 55
console.log(sumSquares([7, 3, 9, 6, 5])); // 200
console.log(sumSquares([11, 13, 15, 18, 2])); // 843
console.log(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])); // 110
