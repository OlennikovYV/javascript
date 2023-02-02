const prevMultOfThree = n => {
  let stringNumber = String(n);

  for (let i = stringNumber.length; i > 0; i -= 1) {
    const minusLastDigit = stringNumber.slice(0, i);
    if (minusLastDigit % 3 === 0) return Number(minusLastDigit);
  }

  return null;
};

const answer = [null, null, 36, 12, 9];
[1, 25, 36, 1244, 952406].forEach((q, i) =>
  console.log(prevMultOfThree(q) + ' = ' + answer[i])
);
