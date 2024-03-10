function findMissingNumbers(arr) {
  return Array.from(
    { length: arr[arr.length - 1] - arr[0] },
    (_, i) => arr[0] + i
  ).filter(el => !arr.includes(el));
}

console.log(findMissingNumbers([-3, -2, 1, 4])); // [-1, 0, 2, 3]
console.log(findMissingNumbers([-1, 0, 1, 2, 3, 4])); // []
console.log(findMissingNumbers([])); // []
