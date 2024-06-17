function vampireTest(a, b) {
  const convertToSortString = numbers =>
    numbers
      .map(number => String(Math.abs(number)))
      .reduce((str, number) => str + number, '')
      .split('')
      .sort((a, b) => a - b)
      .join('');
  const srcNumber = convertToSortString([a, b]);
  const destNumber = convertToSortString([a * b]);
  const isSignDouble = Math.sign(a) == -1 && Math.sign(b) == -1;

  return srcNumber == destNumber && !isSignDouble;
}

console.log(vampireTest(21, 6)); // true
console.log(vampireTest(204, 615)); // true
console.log(vampireTest(30, -51)); // true
console.log(vampireTest(-246, -510)); // false
console.log(vampireTest(2947050, 8469153)); // true
console.log(vampireTest(2947051, 8469153)); // false
