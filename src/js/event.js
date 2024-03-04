function isAllPossibilities(x) {
  return x.length > 0 ? x.every((_, i) => x.includes(i)) : false;
}

console.log(isAllPossibilities([0, 1, 2, 3])); // true
console.log(isAllPossibilities([1, 2, 3, 4])); // false
