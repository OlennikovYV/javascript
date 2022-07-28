function isPalindrome(line) {
  return String(line) == String(line).split('').reverse().join('');
}

console.log(isPalindrome('anna')); // true
console.log(isPalindrome('walter')); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123456)); // false
console.log(isPalindrome('.')); // true
console.log(isPalindrome('.!!.')); // true
