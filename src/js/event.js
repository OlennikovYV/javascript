const xMarksTheSpot = input => {
  let xIsAlready = false;
  let xCoord = [];

  input.forEach((array, i) => {
    array.forEach((value, j) => {
      if (value === 'x') {
        if (xCoord.length > 0 || xIsAlready) {
          xCoord = [];
        } else {
          xCoord = [i, j];
          xIsAlready = true;
        }
      }
    });
  });

  return xCoord;
};

console.log(xMarksTheSpot([])); // []
console.log(
  xMarksTheSpot([
    ['o', 'o'],
    ['o', 'o'],
  ])
);
// []
console.log(
  xMarksTheSpot([
    ['x', 'o'],
    ['o', 'x'],
  ])
);
// []
console.log(
  xMarksTheSpot([
    ['x', 'o'],
    ['o', 'o'],
  ])
);
// [0, 0]
let input = [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
];
console.log(xMarksTheSpot(input)); // [4, 6]
