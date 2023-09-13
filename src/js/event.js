function encode(str) {
  return str
    .split('')
    .map(char => {
      let substractionCharCode = char === char.toUpperCase() ? 64 : 96;

      return /[a-z]/i.test(char)
        ? char.charCodeAt(0) - substractionCharCode
        : char;
    })
    .join('');
}

console.log(encode('abc')); // '123'
console.log(encode('ABCD')); // '1234'
console.log(encode('ZzzzZ')); // '2626262626'
console.log(encode('abc-#@5')); // '123-#@5'
