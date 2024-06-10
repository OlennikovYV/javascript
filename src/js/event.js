function mineLocation(field) {
  for (let y = 0, lengthY = field[0].length; y < lengthY; y++) {
    const findX = field[y].indexOf(1);
    if (findX != -1) return [findX, y];
  }
}

console.log(
  mineLocation([
    [1, 0],
    [0, 0],
  ])
);
// [0, 0]
console.log(
  mineLocation([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
// [0, 0]
console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
// [2, 2]
