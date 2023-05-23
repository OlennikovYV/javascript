function oddOne(arr) {
  return arr.findIndex(num => num & 1);
}

console.log(oddOne([2, 4, 6, 7, 10])); // 3
console.log(oddOne([2, 16, 98, 10, 13, 78])); // 4
console.log(oddOne([4, -8, 98, -12, -7, 90, 100])); // 4
console.log(oddOne([2, 4, 6, 8])); // -1
