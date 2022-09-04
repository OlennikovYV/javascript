longestPalindrome = function (s) {
  let max = 0;
  const invertString = s.split('').reverse().join('');

  for (let i = 0; i < invertString.length; i += 1) {
    for (let j = i + 1; j <= invertString.length; j += 1) {
      let checkString = invertString.slice(i, j);
      let b = s.length - j;
      let e = s.length - i;
      if (checkString === s.slice(b, e)) {
        // console.log([checkString.length, checkString, s.slice(b, e), b, e]);
        if (max < checkString.length) max = checkString.length;
      }
    }
  }

  return max;
};

console.log(longestPalindrome('a')); // 1
console.log(longestPalindrome('aa')); // 2
console.log(longestPalindrome('baa')); // 2
console.log(longestPalindrome('aab')); // 2
console.log(longestPalindrome('zyabyz')); // 1
console.log(longestPalindrome('baabcd')); // 4
console.log(longestPalindrome('baablkj12345432133d')); // 9
console.log(longestPalindrome('I like racecars that go fast')); // 7
console.log(longestPalindrome('abcdefghba')); // 1
console.log(longestPalindrome('')); // 0
