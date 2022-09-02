function minimumSteps(numbers, value) {
  return numbers
    .sort((a, b) => a - b)
    .filter((num, index) => (value -= num) > 0).length;
}

console.log(minimumSteps([4, 6, 3], 7)); // 1
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
