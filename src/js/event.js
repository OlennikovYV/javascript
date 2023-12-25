function unique(arr) {
  return arr.filter((digit, index) => index === arr.indexOf(digit));
}

console.log(unique([4])); // [4]
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(unique([3, 6, 3, 7, 7, 5, 2, 6, 3, 2])); // [3, 6, 7, 5, 2]
