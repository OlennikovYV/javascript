function vectorLength(vector) {
  const [[x1, y1], [x2, y2]] = vector;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

console.log(
  vectorLength([
    [0, 1],
    [0, 0],
  ])
); // 1
console.log(
  vectorLength([
    [0, 3],
    [4, 0],
  ])
); // 5
console.log(
  vectorLength([
    [1, -1],
    [1, -1],
  ])
); // 0
