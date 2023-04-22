function stantonMeasure(arr) {
  const countsDuplicate = arr.reduce((duplicates, digit) => {
    duplicates[digit] = (duplicates[digit] || 0) + 1;
    return duplicates;
  }, {});

  return countsDuplicate[countsDuplicate[1]] || 0;
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 3
console.log(stantonMeasure([-11, 1, -12, 1, -1, 1, -4, 1, -7, 1, 1, 1])); // 0
