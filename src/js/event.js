function findUnique(numbers) {
  const countNumber = {};

  numbers.forEach(
    number => (countNumber[number] = (countNumber[number] || 0) + 1)
  );

  for (let key in countNumber) {
    if (countNumber[key] === 1) return Number(key);
  }
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); // 6
console.log(findUnique([1234567])); // 1234567
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])); // 1
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1])); // 4
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])); // 9
