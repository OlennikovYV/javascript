function hammingWeight(x) {
  return x && (x % 2) + hammingWeight(x >> 1);
}

console.log(hammingWeight(10)); // 2

console.log(hammingWeight(21)); // 3
