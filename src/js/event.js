function hasUniqueChars(str) {
  const countChars = [...str].reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});

  return Object.keys(countChars)
    .map(key => countChars[key])
    .every(count => count == 1);
}

console.log(hasUniqueChars('  nAa')); // false
console.log(hasUniqueChars('abcdef')); // true
console.log(hasUniqueChars('aA')); // true
console.log(hasUniqueChars('++-')); // false
