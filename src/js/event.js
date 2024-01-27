function sequenceSum(begin, end, step) {
  let sum = 0;

  if (begin > end && step > 0) return 0;

  if ((begin < 0 && end < 0 && step < 0) || (begin > end && step < 0)) {
    for (let i = begin; i >= end; i += step) sum += i;
  }

  if (begin < end && step > 0) {
    for (let i = begin; i <= end; i += step) sum += i;
  }

  return sum;
}

console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5
console.log(sequenceSum(-1, -5, -3)); // -5
console.log(sequenceSum(16, 15, 3)); // 0
console.log(sequenceSum(-24, -2, 22)); // -26
console.log(sequenceSum(-2, 4, 658)); // -2
console.log(sequenceSum(780, 68515438, 5)); // 469436517521190
console.log(sequenceSum(9383, 71418, 2)); // 1253127200
console.log(sequenceSum(20, 67338879, 5)); // 453452442295970
console.log(sequenceSum(27370145, -0, -6)); // 62427083461825
