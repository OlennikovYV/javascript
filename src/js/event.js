function twosDifference(input) {
  const difference = [];
  const inputData = [...new Set(input)].slice(0).sort((a, b) => a - b);

  for (let i = 0; i < input.length - 1; i++) {
    const temp = inputData.slice(i + 1);
    const value = inputData[i];

    if (temp.includes(value + 2)) difference.push([value, value + 2]);
  }

  return difference;
}

console.log(twosDifference([1, 2, 3, 4]));
// [
//   [1, 3],
//   [2, 4]
// ]
console.log(twosDifference([1, 3, 4, 6]));
// [
//   [1, 3],
//   [4, 6]
// ]
console.log(twosDifference([0, 3, 1, 4]));
// [
//   [1, 3]
// ]
