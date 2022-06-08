function isPowerOfTwo(n) {
  return Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(5)); // false
