function vampireTest(a, b) {
  const convertToSortString = str =>
    str
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

  return convertToSortString(a + '' + b) == convertToSortString(a * b + '');
}

console.log(vampireTest(21, 6)); // true
console.log(vampireTest(204, 615)); // true
console.log(vampireTest(30, -51)); // true
console.log(vampireTest(-246, -510)); // false
console.log(vampireTest(2947050, 8469153)); // true
console.log(vampireTest(2947051, 8469153)); // false
