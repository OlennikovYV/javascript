function validate(n) {
  const arrayDigits = Array.from(String(n), char => Number(char));
  const evenLengthNumbers = arrayDigits.length % 2;
  const mulTwo = num => {
    const result = num * 2;

    return result < 10 ? result : result - 9;
  };

  return (
    arrayDigits
      .map((num, i) => (i % 2 === evenLengthNumbers ? mulTwo(num) : num))
      .reduce((sum, num) => sum + num) %
      10 ===
    0
  );
}

console.log(validate(123)); // false
console.log(validate(1)); // false
console.log(validate(2121)); // true
console.log(validate(1230)); //true
