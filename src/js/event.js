function duplicateElements(m, n) {
  return m.some(el => n.includes(el));
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])); // true
console.log(duplicateElements([9, 8, 7], [8, 1, 3])); // true
