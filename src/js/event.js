function divisibleByThree(str) {
  const sumDigit = str.split('').reduce((sum, digit) => sum + Number(digit), 0);

  return sumDigit % 3 === 0;
}

console.log(divisibleByThree('123')); // true,
console.log(divisibleByThree('19254')); // true,
console.log(divisibleByThree('88')); // false,
console.log(divisibleByThree('1')); // false,
