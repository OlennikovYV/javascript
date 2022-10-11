function evenOrOdd(str) {
  let odd = 0;
  let even = 0;

  str.split('').forEach(strDigit => {
    const digit = Number(strDigit);
    digit % 2 ? (odd += digit) : (even += digit);
  });

  return odd > even
    ? 'Odd is greater than Even'
    : odd < even
    ? 'Even is greater than Odd'
    : 'Even and Odd are the same';
}

console.log(evenOrOdd('12')); // 'Even is greater than Odd'
console.log(evenOrOdd('123')); // 'Odd is greater than Even'
console.log(evenOrOdd('112')); // 'Even and Odd are the same'
