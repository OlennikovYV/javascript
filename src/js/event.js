String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

console.log('String'.reverse()); // 'gnirtS'
console.log('Another string'.reverse()); // 'gnirts rehtonA'
