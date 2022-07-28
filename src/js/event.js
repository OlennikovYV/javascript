function isPalindrome(line) {
  const isNumber = typeof line === 'number';
  let word = String(line).split('');
  word = word.reverse().join('');

  if (isNumber) {
    word = Number(word);
  }

  return word === line;
}

console.log(isPalindrome('anna')); // true
console.log(isPalindrome('walter')); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123456)); // false
console.log(isPalindrome('.')); // true
console.log(isPalindrome('.!!.')); // true
