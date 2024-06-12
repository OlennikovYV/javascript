function countSquares(cuts) {
  const pieces = cuts + 1;

  return cuts == 0 ? 1 : 2 * (pieces ** 2 + (pieces - 2) * (2 * pieces - 2));
}

console.log(countSquares(5)); // 152
console.log(countSquares(16)); // 1538
console.log(countSquares(23)); // 3176
