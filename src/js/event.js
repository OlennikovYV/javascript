const sumNested = arr =>
  arr.reduce((sum, el) => sum + (Array.isArray(el) ? sumNested(el) : el), 0);

console.log(sumNested([1])); // 1
console.log(sumNested([1, 2, 3, 4])); // 10
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumNested([])); // 0
console.log(sumNested([[1], []])); // 1
console.log(sumNested([[1, 2, 3, 4]])); // 10
console.log(sumNested([1, [1], [[1]], [[[1]]]])); // 4
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]])); // 8
console.log(
  sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []])
); // 0
