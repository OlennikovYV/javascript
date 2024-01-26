String.prototype.contains = function (string, caseInsensitive = false) {
  if (caseInsensitive) {
    return this.includes(string);
  }

  return this.toLowerCase().includes(string.toLowerCase());
};

console.log('Hello, World!'.contains('Hel')); // true
console.log('Hello, World!'.contains('wor')); // true
console.log('Hello, World!'.contains('wor', true)); // false
console.log('Hello, World!'.contains('a')); // false
