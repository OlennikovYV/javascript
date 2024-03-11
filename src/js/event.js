function hammingWeight(x) {
  const binArray = [];

  while (x > 0) {
    binArray.unshift(x % 2);
    x >>= 1;
  }

  return binArray.filter(el => el === 1).length;
}

console.log(hammingWeight(10)); // 2

console.log(hammingWeight(21)); // 3
