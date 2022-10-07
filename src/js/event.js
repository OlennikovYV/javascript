function isPythagoreanTriple(integers) {
  const array = integers.sort((a, b) => a - b);

  return array[0] ** 2 + array[1] ** 2 === array[2] ** 2;
}

console.log(isPythagoreanTriple([3, 4, 5])); // true
console.log(isPythagoreanTriple([3, 5, 9])); // false
console.log(isPythagoreanTriple([72, 78, 30])); // true
