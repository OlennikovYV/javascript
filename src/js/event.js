function validISBN10(isbn) {
  const checkTemplate = /\d{9}[\d|X]{1}/.test(isbn);

  if (!checkTemplate) return false;
  if (isbn.length > 10) return false;

  return !(
    isbn.split('').reduce((acc, el, i, arr) => {
      if (el === 'X') el = 10;
      acc = acc + Number(el) * (i + 1);

      return acc;
    }, 0) % 11
  );
}

const sampleTests = [
  ['1112223339', true],
  ['048665088X', true],
  ['1293000000', true],
  ['1234554321', true],
  ['1234512345', false],
  ['1293', false],
  ['X123456788', false],
  ['ABCDEFGHIJ', false],
  ['XXXXXXXXXX', false],
  ['048665088XZ', false],
];

sampleTests.forEach(([input, expected], i) =>
  console.log(`${i + 1} ${validISBN10(input)} = ${expected}`)
);
