function sumEvenNumbers(input) {
  return input.reduce((sum, digit) => (digit % 2 ? sum : sum + digit), 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
