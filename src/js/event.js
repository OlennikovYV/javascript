const sumDigits = number =>
  number.split('').reduce((sum, digit) => sum + Number(digit), 0);

function orderWeight(strng) {
  return strng
    .split(' ')
    .sort((a, b) => sumDigits(a) - sumDigits(b) || a.localeCompare(b))
    .join(' ');
}

console.log(orderWeight('103 123 4444 99 2000'));
// '2000 103 123 4444 99'
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));
// '11 11 2000 10003 22 123 1234000 44444444 9999'
