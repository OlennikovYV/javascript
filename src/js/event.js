function insertDash(num) {
  const number = String(num);
  let result = '';
  const isOdd = digit => digit % 2 !== 0;

  for (let i = 0; i < number.length; i += 1) {
    if (isOdd(number[i]) && number[i - 1] && isOdd(number[i - 1]))
      result += '-';
    result += number[i];
  }

  return result;
}

console.log(insertDash(454793)); // '4547-9-3'
console.log(insertDash(123456)); // '123456'
console.log(insertDash(1003567)); // '1003-567'
