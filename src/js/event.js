function isPythagoreanTriple(integers) {
  const [a, b, c] = integers.sort((a, b) => a - b);

  return a ** 2 + b ** 2 === c ** 2;
}

console.log(isPythagoreanTriple([3, 4, 5])); // true
console.log(isPythagoreanTriple([3, 5, 9])); // false
console.log(isPythagoreanTriple([72, 78, 30])); // true
