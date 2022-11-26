function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(num => Number.isInteger(num));
}

console.log(isIntArray([])); // true
console.log(isIntArray(null)); // false
console.log(isIntArray([1, 2, 3, 4])); // true
console.log(isIntArray([1, 2, 3, 4.0])); // true
console.log(isIntArray([1, 2, 3, 4.1])); // true
console.log(isIntArray([1, 2, 3, NaN])); // false
