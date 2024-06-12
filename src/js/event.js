function countSquares(cuts) {
  return cuts == 0 ? 1 : 6 * cuts * cuts + 2;
}

console.log(countSquares(5)); // 152
console.log(countSquares(16)); // 1538
console.log(countSquares(23)); // 3176
