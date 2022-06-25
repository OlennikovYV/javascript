function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF('1')); // 1.0
console.log(parseF('r')); // 0
