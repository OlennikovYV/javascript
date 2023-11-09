function findDup(arr) {
  return arr.reduce((dup, digit) => dup ^ digit, 0);
}

console.log(findDup([1, 2, 2, 3])); // 2
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); // 5
