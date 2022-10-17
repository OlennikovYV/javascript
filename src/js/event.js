function arithmeticSequenceElements(a, d, n) {
  let next = a;
  const progression = [next];

  for (let i = 1; i < n; i += 1) {
    next = next + d;
    progression.push(next);
  }

  return progression.join(', ');
}

console.log(arithmeticSequenceElements(1, 2, 5)); // '1, 3, 5, 7, 9');
console.log(arithmeticSequenceElements(1, 0, 5)); // '1, 1, 1, 1, 1');
console.log(arithmeticSequenceElements(1, -3, 10)); // '1, -2, -5, -8, -11, -14, -17, -20, -23, -26'
console.log(arithmeticSequenceElements(100, -10, 10)); // '100, 90, 80, 70, 60, 50, 40, 30, 20, 10'
