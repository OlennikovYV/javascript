function isVeryEvenNumber(n) {
  const sumDigit = num => {
    const arrayDigits = Array(...String(num));

    return arrayDigits.length > 1
      ? sumDigit(arrayDigits.reduce((sum, digit) => sum + Number(digit), 0))
      : arrayDigits[0];
  };

  return sumDigit(n) % 2 === 0;
}

const inputs = [0, 4, 12, 222, 5, 45, 4554, 1234, 88, 24, 400000220];
const expecteds = [
  true,
  true,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
];

for (let i = 0; i < inputs.length; i++) {
  const n = inputs[i];
  const expected = expecteds[i];
  let actual = isVeryEvenNumber(n);

  console.log(`Number = ${n}, Hint = ${expected}, Answer = ${actual}`);
}
