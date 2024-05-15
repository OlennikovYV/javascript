function permuteAPalindrome(input) {
  return (
    input
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
      .replace(/(.)\1/g, '').length <= 1
  );
}

console.log(permuteAPalindrome('a')); // true
console.log(permuteAPalindrome('aa')); // true
console.log(permuteAPalindrome('aaa')); // true
console.log(permuteAPalindrome('baa')); // true
console.log(permuteAPalindrome('aab')); // true
console.log(permuteAPalindrome('baabcd')); // false
console.log(permuteAPalindrome('racecars')); // false
console.log(permuteAPalindrome('abcdefghba')); // false
console.log(permuteAPalindrome('')); // true
