const sumAverage = arr => {
  return Math.floor(
    arr.reduce(
      (sumAverage, arr) =>
        sumAverage + arr.reduce((sum, number) => sum + number, 0) / arr.length,
      0
    )
  );
};

console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ])
); // 44
console.log(
  sumAverage([
    [-4, 3, -8, -2],
    [2, 9, 1, -5],
    [-7, -2, -6, -4],
  ])
); // -6
