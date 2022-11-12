function unusedDigits(...listNumbers) {
  return '0123456789'.replace(
    new RegExp('[' + listNumbers.join('') + ']', 'g'),
    ''
  );
}

console.log(unusedDigits(12, 34, 56, 78)); // '09'
console.log(unusedDigits(2015, 8, 26)); // '3479'
