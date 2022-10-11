var removeVowels = function (str) {
  return str.replace(/[aeiou]/g, '');
};

console.log(removeVowels('drake')); // 'drk'
console.log(removeVowels('aeiou')); // ''
