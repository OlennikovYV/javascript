String.prototype.vowel = function () {
  return /^[aeiou]$/gi.test(this);
};

console.log(''.vowel(chai.expect)); // false
console.log('a'.vowel(chai.expect)); // true
console.log('E'.vowel(chai.expect)); // true
console.log('ou'.vowel(chai.expect)); // false
console.log('z'.vowel(chai.expect)); // false
console.log('lol'.vowel(chai.expect)); // false
