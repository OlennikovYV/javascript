function onesComplement(n) {
  return n
    .split('')
    .map(el => (el === '1' ? '0' : '1'))
    .join('');
}

console.log(onesComplement('0')); // '1'
console.log(onesComplement('1')); // '0'
console.log(onesComplement('01')); // '10'
console.log(onesComplement('10')); // '01'
console.log(onesComplement('1101')); // '0010'
