function smaller(arr) {
  return arr.map(
    (digit, i) =>
      arr.slice(i + 1).filter(digitRight => digitRight < digit).length
  );
}

console.log(smaller([5, 4, 3, 2, -1])); // [4, 3, 2, 1, 0]
console.log(smaller([5, 4, 3, 2, 1])); // [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 3])); // [0, 0, 0]
console.log(smaller([1, 2, 0])); // [1, 1, 0]
console.log(smaller([1, 2, 1])); // [0, 1, 0]
console.log(smaller([1, 1, -1, 0, 0])); // [3, 3, 0, 0, 0]
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])); // [4, 1, 5, 5, 0, 0, 0, 0, 0]
console.log(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6])); // [5, 2, 6, 6, 1, 1, 0, 0, 0, 0]
