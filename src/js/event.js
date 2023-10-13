function matrixAddition(a, b) {
  return a.map((line, indexLine) =>
    line.map((row, indexRow) => row + b[indexLine][indexRow])
  );
}

console.log(
  matrixAddition(
    [
      [1, 2],
      [1, 2],
    ],
    //    +
    [
      [2, 3],
      [2, 3],
    ]
  )
);
//    =
// [
//   [3, 5],
//   [3, 5],
// ]

console.log(
  matrixAddition(
    [[1]],
    //   +
    [[2]]
  )
);
//   =
// [[3]]

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
);
//      =
// [
//   [3, 4, 4],
//   [6, 4, 4],
//   [2, 2, 4],
// ]
