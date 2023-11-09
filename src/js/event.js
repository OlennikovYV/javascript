function findDup(arr) {
  return arr.reduce(
    (dup, digit, i) => (arr.indexOf(digit) === i ? dup : digit),
    null
  );
}

console.log(findDup([1, 2, 2, 3])); // 2
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); // 5
