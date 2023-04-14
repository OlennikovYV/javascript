function calculate(string) {
  const digits = string.match(/\d+/g).map(Number);

  return digits.reduce(
    (result, digit) =>
      string.includes('loses') ? Math.abs(result - digit) : result + digit,
    0
  );
}

console.log(calculate('Panda has 48 apples and loses 4')); // 44
console.log(calculate('Jerry has 34 apples and gains 6')); // 40
