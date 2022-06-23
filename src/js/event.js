function isDigit(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}

console.log(isDigit('2342')); // true
console.log(isDigit('-234.4')); // true
console.log(isDigit('s2342')); // false
console.log(isDigit('23 42')); // false
console.log(isDigit('23x42')); // false
