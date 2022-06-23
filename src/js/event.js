function closeCompare(a, b, margin) {
  const diff = a - b;
  if (margin === undefined) margin = 0;

  return Math.abs(diff) <= margin ? 0 : a < b ? -1 : 1;
}

console.log(closeCompare(4, 5)); // -1
console.log(closeCompare(5, 5)); // 0
console.log(closeCompare(6, 5)); // 1
console.log(closeCompare(-6, -5)); // -1
console.log(closeCompare(2, 5, 3)); // 0
console.log(closeCompare(8.1, 5, 3)); // 1
console.log(closeCompare(1.99, 5, 3)); // -1
