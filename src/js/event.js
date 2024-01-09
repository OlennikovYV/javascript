function findNumber(array) {
  let totalLength = array.length + 1;
  let sumSource = array.reduce((sum, number) => sum + number, 0);
  let sumTotal = (totalLength * (totalLength + 1)) / 2;

  return sumTotal - sumSource;
}

console.log(findNumber([1, 3, 4, 5, 6, 7, 8])); // 2
console.log(findNumber([7, 8, 1, 2, 4, 5, 6])); // 3
console.log(findNumber([1, 2, 3, 5])); // 4
console.log(findNumber([1, 3])); // 2
console.log(findNumber([2, 3, 4])); // 1
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8])); // 12
console.log(findNumber([1, 2, 3])); // 4
