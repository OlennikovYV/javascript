function nthChar(words) {
  return words.map((word, index) => word.charAt(index)).join('');
}

console.log(nthChar([])); // ''
console.log(nthChar(['yoda', 'best', 'has'])); // 'yes'
