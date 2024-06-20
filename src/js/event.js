function GeometricSequenceSum(firstTerm, commonRatio, amountOfTerms) {
  let sum = firstTerm;
  let prevTerm = firstTerm;

  for (let i = 1; i < amountOfTerms; i++) {
    const seq = prevTerm * commonRatio;
    sum += seq;
    prevTerm = seq;
  }

  return sum;
}

console.log(GeometricSequenceSum(2, 3, 5)); // 242
console.log(GeometricSequenceSum(1, 1, 2)); // 2
console.log(GeometricSequenceSum(2, 2, 10)); // 2046
console.log(GeometricSequenceSum(1, -2, 10)); // -341
console.log(GeometricSequenceSum(1, 0.5, 10)); // 1.998046875
