function averages(numbers) {
  let averagesArray = [];

  if (!numbers || numbers.length <= 1) return [];

  for (let i = 0; i < numbers.length - 1; i++) {
    averagesArray.push((numbers[i] + numbers[i + 1]) / 2);
  }

  return averagesArray;
}

console.log(averages(null)); // []
console.log(averages([2, 2, 2, 2, 2])); // [2, 2, 2, 2]
console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
