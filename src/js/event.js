function bitsWar(numbers) {
  let sumEven = 0;
  let sumOdd = 0;

  const sumOnes = number =>
    Math.abs(number).toString(2).replace(/0/g, '').length;

  numbers.map(number => {
    const sign = Math.sign(number);
    const count = sumOnes(number);

    if (number % 2) {
      sumOdd += sign * count;
    } else {
      sumEven += sign * count;
    }
  });

  if (sumEven == sumOdd) return 'tie';

  return sumEven > sumOdd ? 'evens win' : 'odds win';
}

console.log(bitsWar([1, 5, 12])); // 'odds win'
console.log(bitsWar([7, -3, 20])); // 'evens win'
console.log(bitsWar([7, -3, -2, 6])); // 'tie'
console.log(bitsWar([-3, -5])); // 'evens win'
console.log(bitsWar([])); // 'tie'
