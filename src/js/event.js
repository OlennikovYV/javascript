function nthChar(words) {
  return words.reduce((string, word, index) => string + word[index], '');
}

console.log(nthChar([])); // ''
console.log(nthChar(['yoda', 'best', 'has'])); // 'yes'
