function catchSignChange(arr) {
  return arr.reduce(
    ([count, sign], number) => {
      const currentSign = Math.sign(number) !== 0 ? Math.sign(number) : 1;

      if (sign !== currentSign) {
        sign = currentSign;
        count++;
      }

      return [count, sign];
    },
    [0, Math.sign(arr[0]) !== 0 ? Math.sign(arr[0]) : 1]
  )[0];
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
