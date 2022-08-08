function logicalCalc(array, op) {
  return array.reduce((acc, bool) => {
    if (op === 'AND') acc = acc & bool;
    if (op === 'OR') acc = acc | bool;
    if (op === 'XOR') acc = acc ^ bool;
    return Boolean(acc);
  });
}

console.log(logicalCalc([true, true, true, false], 'AND')); // false
console.log(logicalCalc([true, true, true, false], 'OR')); // true
console.log(logicalCalc([true, true, true, false], 'XOR')); // true
console.log(logicalCalc([true, true, false, false], 'AND')); // false
console.log(logicalCalc([true, true, false, false], 'OR')); // true
console.log(logicalCalc([true, true, false, false], 'XOR')); // false
console.log(logicalCalc([true, false, false, false], 'AND')); // false
console.log(logicalCalc([true, false, false, false], 'OR')); // true
console.log(logicalCalc([true, false, false, false], 'XOR')); // true
console.log(logicalCalc([true, true], 'AND')); // true
console.log(logicalCalc([true, true], 'OR')); // true
console.log(logicalCalc([true, true], 'XOR')); // false
console.log(logicalCalc([false, false], 'AND')); // false
console.log(logicalCalc([false, false], 'OR')); // false
console.log(logicalCalc([false, false], 'XOR')); // false
console.log(logicalCalc([false], 'AND')); // false
console.log(logicalCalc([false], 'OR')); // false
console.log(logicalCalc([false], 'XOR')); // false
console.log(logicalCalc([true], 'AND')); // true
console.log(logicalCalc([true], 'OR')); // true
console.log(logicalCalc([true], 'XOR')); // true
