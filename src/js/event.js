function isAllPossibilities(x) {
  const arr = [...x].sort((a, b) => a - b);

  return arr.every((el, i) => el === i);
}

console.log(isAllPossibilities([0, 1, 2, 3])); // true
console.log(isAllPossibilities([1, 2, 3, 4])); // false
