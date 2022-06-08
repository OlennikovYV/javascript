const countSetBit = num => {
  let count = 0;
  while (num) {
    count += num & 1;
    num >>>= 1;
  }
  return count;
};

function isPowerOfTwo(n) {
  let num = n;

  return countSetBit(num) === 1;
}

console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(5)); // false
