function lowestProduct(input) {
  let consecutivesMult = Number.MAX_SAFE_INTEGER;

  if (input.length < 4) return 'Number is too small';

  for (let i = 0; i < input.length - 3; i++) {
    const consecutives = input[i] * input[i + 1] * input[i + 2] * input[i + 3];
    if (consecutivesMult > consecutives) consecutivesMult = consecutives;
  }

  return consecutivesMult;
}

console.log(lowestProduct('123456789')); // 24
console.log(lowestProduct('234567899')); // 120
console.log(lowestProduct('2345611117899')); // 1
console.log(lowestProduct('333')); // 'Number is too small'
console.log(lowestProduct('1234111')); // 4
