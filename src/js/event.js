function validateWord(s) {
  let repeatChar;
  const countChars = {};

  s.toLowerCase()
    .split('')
    .forEach(char => (countChars[char] = (countChars[char] || 0) + 1));

  for (let key in countChars) {
    if (!repeatChar) {
      repeatChar = countChars[key];
      continue;
    }

    if (countChars[key] !== repeatChar) return false;
  }

  return true;
}

console.log(validateWord('abcabc')); // true
console.log(validateWord('Abcabc')); // true
console.log(validateWord('abc123')); // true
console.log(validateWord('abcabcd')); // false
console.log(validateWord('abc!abc!')); // true
console.log(validateWord('abc:abc')); // false
