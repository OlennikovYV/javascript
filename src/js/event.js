function mineLocation(field) {
  for (let x = 0, lengthX = field[0].length; x < lengthX; x++)
    for (let y = 0, lengthY = field.length; y < lengthY; y++) {
      if (field[x][y] == 1) return [x, y];
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
