function catchSignChange(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] < 0 && arr[i + 1] >= 0) || (arr[i] >= 0 && arr[i + 1] < 0))
      count++;
  }

  return count;
}

const tests = [
  [[], 0],
  [[0], 0],
  [[-7, -7, 7, 0], 1],
  [[1, 3, 4, 5], 0],
  [[-1, -3, -4, -5], 0],
  [[1, -3, -4, 0, 5], 2],
  [[-47, 84, -30, -11, -5, 74, 77], 3],
];

for (let [input, expected] of tests) {
  console.log(catchSignChange(input), expected);
}
