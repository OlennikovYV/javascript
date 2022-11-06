function broken(x) {
  return x.replace(/[01]/g, bin => '10'[bin]);
}

console.log(broken('1')); // '0'
console.log(broken('10000000101101111110011001000'));
// '01111111010010000001100110111'
console.log(broken('100010')); // '011101'
