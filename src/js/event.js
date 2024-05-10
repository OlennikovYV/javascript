String.prototype.whitespace = function () {
  return /^\s*$/gi.test(this);
};

console.log(''.whitespace()); // true
console.log(' '.whitespace()); // true
console.log('\n\r\n\r'.whitespace()); // true
console.log('a'.whitespace()); // false
console.log('w\n'.whitespace()); // false
console.log('\t'.whitespace()); // true
console.log(' a\n'.whitespace()); // false
console.log('\t \n\r\n  '.whitespace()); // true
console.log('\n\r\n\r '.whitespace()); // true
console.log('\n\r\n\r 3'.whitespace()); // false
