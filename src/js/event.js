function squareArea(A) {
  let r = (2 * A) / Math.PI;

  return Number(Math.pow(r, 2).toFixed(2));
}

console.log(squareArea(2)); // 1.62
console.log(squareArea(0)); // 0
console.log(squareArea(14.05)); // 80
