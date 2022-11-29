function consecutive(arr) {
  return (Math.max(...arr) - Math.min(...arr) - arr.length + 1) | 0;
}

console.log(consecutive([4, 8, 6])); // 2
console.log(consecutive([1, 2, 3, 4])); // 0
console.log(consecutive([])); // 0
console.log(consecutive([1])); // 0
