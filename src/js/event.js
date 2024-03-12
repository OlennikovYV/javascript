function meanVsMedian(numbers) {
  const mean = numbers.reduce((sum, el) => sum + el, 0) / numbers.length;
  const median = numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];

  if (mean > median) return 'mean';
  if (mean < median) return 'median';

  return 'same';
}

console.log(meanVsMedian([1, 1, 1])); // 'same'
console.log(meanVsMedian([1, 2, 37])); // 'mean'
console.log(meanVsMedian([7, 14, -70])); // 'median'
