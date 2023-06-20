function filterHomogenous(arrays) {
  let checkHomogenous = (arr, callback) =>
    arr.every(item => item === callback(item));

  return arrays.filter(arr => {
    return (
      arr.length &&
      (checkHomogenous(arr, Number) || checkHomogenous(arr, String))
    );
  });
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
// [[1, 5, 4], ['b']]
console.log(
  filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
);
// [[123, 234, 432], ['', 'abc'], [''], ['', '1']]
