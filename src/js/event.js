const palindromeChainLength = function (n) {
  const reverseNum = num => +String(num).split('').reverse().join('');
  const isPalindrome = num => num === reverseNum(num);

  let count = 0;
  let num = n;

  while (!isPalindrome(num)) {
    num = num + reverseNum(num);
    count += 1;
  }

  return count;
};

console.log(palindromeChainLength(1)); // 0
console.log(palindromeChainLength(88)); // 0

console.log(palindromeChainLength(87)); // 4
console.log(palindromeChainLength(89)); // 24
console.log(palindromeChainLength(10)); // 1
