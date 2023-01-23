function mergeArrays(a, b) {
  let joinArray = [];
  let count = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < count; i += 1) {
    if (a[i]) joinArray.push(a[i]);
    if (b[i]) joinArray.push(b[i]);
  }

  return joinArray;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
// [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 7, 8]
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));
// ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']));
// [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
console.log(
  mergeArrays(
    ['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'],
    [2, 5, 8, 23, 67, 6]
  )
);
// ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']
console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e']));
// [1, 'a', 2, 'b', 3, 'c', 'd', 'e']
