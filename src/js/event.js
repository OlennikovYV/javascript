function completeSeries(arr) {
  return new Set(arr).size != arr.length
    ? [0]
    : [...Array(Math.max(...arr) + 1).keys()];
}

console.log(completeSeries([0, 1])); // [0, 1]
console.log(completeSeries([1, 4, 6])); // [0, 1, 2, 3, 4, 5, 6]
console.log(completeSeries([3, 4, 5])); // [0, 1, 2, 3, 4, 5]
console.log(completeSeries([2, 1])); // [0, 1, 2]
console.log(completeSeries([1, 4, 4, 6])); // [0]
console.log(completeSeries([7])); // [0, 1, 2, 3, 4, 5, 6, 7]
