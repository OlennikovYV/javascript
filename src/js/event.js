function cartesianNeighbor(x, y) {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];
}

console.log(cartesianNeighbor(2, 2));
// [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]
