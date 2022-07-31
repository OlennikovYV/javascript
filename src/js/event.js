function differenceOfSquares(n) {
  let squareSum = 0;
  let sumSquare = 0;

  for (let i = 0; i <= n; i += 1) {
    squareSum += i;
    sumSquare += i ** 2;
  }

  return squareSum ** 2 - sumSquare;
}

console.log(differenceOfSquares(5)); // 170
console.log(differenceOfSquares(10)); // 2640
console.log(differenceOfSquares(100)); // 25164150
