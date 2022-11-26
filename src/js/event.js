function isIntArray(arr) {
  if (!arr) return false;
  if (arr.length === 0) return true;

  return arr.every(num => {
    return Number.isInteger(num) || num === Math.trunc(num);
  });
}

console.log(isIntArray([])); // true
console.log(isIntArray(null)); // false
console.log(isIntArray([1, 2, 3, 4])); // true
console.log(isIntArray([1, 2, 3, 4.0])); // true
console.log(isIntArray([1, 2, 3, 4.1])); // true
console.log(isIntArray([1, 2, 3, NaN])); // false
