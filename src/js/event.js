function tripledouble(num1, num2) {
  let digit = 0;
  let result = false;

  while (digit < 10) {
    const checkDigit1 = digit.toString();
    const checkDigit2 = digit.toString();
    const regexp1 = new RegExp(checkDigit1.repeat(3));
    const regexp2 = new RegExp(checkDigit2.repeat(2));
    result = regexp1.test(num1) && regexp2.test(num2);

    if (result) return Number(result);

    digit += 1;
  }

  return Number(result);
}

console.log(tripledouble(451999277, 41177722899)); // 1
console.log(tripledouble(1222345, 12345)); // 0
console.log(tripledouble(12345, 12345)); // 0
console.log(tripledouble(666789, 12345667)); // 1
console.log(tripledouble(10560002, 100)); // 1
console.log(tripledouble(1112, 122)); // 0
