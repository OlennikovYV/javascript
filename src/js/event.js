function filterHomogenous(arrays) {
  return arrays.filter(arr => {
    return arr.length && arr.every(item => typeof item === typeof arr[0]);
  });
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
// [[1, 5, 4], ['b']]
console.log(
  filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
);
// [[123, 234, 432], ['', 'abc'], [''], ['', '1']]
