function reverseNumber(n) {
  return (
    Math.sign(n) *
    Number(String(n).replace(/-/g, '').split('').reverse().join(''))
  );
}

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-123)); // -321
console.log(reverseNumber(1000)); // 1
console.log(reverseNumber(4321234)); // 4321234
console.log(reverseNumber(5)); // 5
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(98989898)); // 89898989
