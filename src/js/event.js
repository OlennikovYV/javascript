function divisibleByThree(str) {
  return str.split('').reduce((sum, digit) => sum + Number(digit), 0) % 3 === 0;
}

console.log(divisibleByThree('123')); // true,
console.log(divisibleByThree('19254')); // true,
console.log(divisibleByThree('88')); // false,
console.log(divisibleByThree('1')); // false,
