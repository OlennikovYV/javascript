function inAscOrder(arr) {
  const sortArray = Array.from(arr);

  sortArray.sort((a, b) => a - b);

  return String(arr) === String(sortArray);
}

console.log(inAscOrder([1, 2, 4, 7, 19])); // true
console.log(inAscOrder([1, 2, 3, 4, 5])); // true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // false
