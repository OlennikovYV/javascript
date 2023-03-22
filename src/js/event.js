function vowelOne(s) {
  return s
    .split('')
    .map(char => ('aeoiu'.includes(char.toLowerCase()) ? 1 : 0))
    .join('');
}

console.log(vowelOne('vowelOne')); // '01010101'
console.log(vowelOne('123, arou')); // '000001011'
