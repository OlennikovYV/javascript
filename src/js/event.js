function avgArray(arr) {
  const lengthArrays = arr.length;
  const lengthArray = arr[0].length;
  const averageArray = Array.from({ length: lengthArray }, el => 0);

  for (let i = 0; i < lengthArrays; i++) {
    for (let j = 0; j < lengthArray; j++) {
      averageArray[j] += arr[i][j];
    }
  }

  return averageArray.map(el => el / lengthArrays);
}

console.log(
  avgArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);
// [3, 4, 5, 6]
console.log(
  avgArray([
    [2, 3, 9, 10, 7],
    [12, 6, 89, 45, 3],
    [9, 12, 56, 10, 34],
    [67, 23, 1, 88, 34],
  ])
);
// [22.5, 11, 38.75, 38.25, 19.5]
console.log(
  avgArray([
    [1.2, 8.521, 0.4, 3.14, 1.9],
    [2, 4.5, 3.75, 0.987, 1.0],
  ])
);
// [1.6, 6.5105, 2.075, 2.0635, 1.45]
