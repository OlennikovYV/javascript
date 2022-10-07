function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);

  const sqrtAB = Math.pow(integers[0], 2) + Math.pow(integers[1], 2);
  const sqrtC = Math.pow(integers[2], 2);

  return sqrtAB === sqrtC;
}

console.log(isPythagoreanTriple([3, 4, 5])); // true
console.log(isPythagoreanTriple([3, 5, 9])); // false
console.log(isPythagoreanTriple([72, 78, 30])); // true
