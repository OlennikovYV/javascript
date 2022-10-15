function countRedBeads(n) {
  return n > 1 ? (n - 1) * 2 : 0;
}

console.log(countRedBeads(0)); // 0
console.log(countRedBeads(1)); // 0
console.log(countRedBeads(3)); // 4
console.log(countRedBeads(5)); // 8
