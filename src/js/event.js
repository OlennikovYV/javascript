function myParseInt(str) {
  return /^\d+$/.test(str.trim()) ? parseInt(str) : 'NaN';
}

console.log(myParseInt('1')); // 1
console.log(myParseInt('  1 ')); // 1
console.log(myParseInt('08')); // 8
console.log(isNaN(myParseInt('5 friends'))); // true
console.log(isNaN(myParseInt('16.5'))); // true
