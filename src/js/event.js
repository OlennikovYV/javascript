function stantonMeasure(arr) {
  const count = n => arr.filter(digit => digit === n).length;

  return count(count(1));
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 3
console.log(stantonMeasure([-11, 1, -12, 1, -1, 1, -4, 1, -7, 1, 1, 1])); // 0
