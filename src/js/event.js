function minimumSteps(numbers, value) {
  let count = 0;
  let sum;

  numbers.sort((a, b) => a - b);
  sum = numbers[0];
  numbers = numbers.slice(1);

  if (sum >= value) return 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    count += 1;
    if (sum >= value) break;
  }

  return count;
}

console.log(minimumSteps([4, 6, 3], 7)); // 1
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
