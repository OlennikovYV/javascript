function permuteAPalindrome(input) {
  const arrayChar = input.split('');
  const lengthOdd = arrayChar.length % 2;
  let countChar = {};
  const convertObjToArr = obj =>
    Object.keys(obj).map(key => ({ key: key, count: obj[key] }));

  arrayChar.reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;

    return counts;
  }, countChar);

  if (input.length < 2) return true;

  if (lengthOdd) {
    const array = convertObjToArr(countChar);

    return array.filter(el => el.count % 2 === 1).length < 2;
  } else {
    const array = convertObjToArr(countChar);
    const length = array.length;

    return length === array.filter(el => el.count % 2 === 0).length;
  }
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
