function extraPerfect(n) {
  return Array.from({ length: n + 1 }, (_, i) => i).filter(num => num % 2);
}

console.log(extraPerfect(3)); // [1, 3]
console.log(extraPerfect(5)); // [1, 3, 5]
console.log(extraPerfect(7)); // [1, 3, 5, 7]
console.log(extraPerfect(28));
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]
console.log(extraPerfect(39));
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]
