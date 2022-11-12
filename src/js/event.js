function unusedDigits(...listNumbers) {
  let stringDigits = listNumbers.join('').split('');

  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    .filter(digit => !stringDigits.includes(digit))
    .sort()
    .join('');
}

console.log(unusedDigits(12, 34, 56, 78)); // '09'
console.log(unusedDigits(2015, 8, 26)); // '3479'
