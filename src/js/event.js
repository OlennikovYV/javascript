function alternateCase(s) {
  return s
    .split('')
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

console.log(alternateCase('abc')); // 'ABC'
console.log(alternateCase('ABC')); // 'abc'
console.log(alternateCase('Hello World')); // 'hELLO wORLD'
