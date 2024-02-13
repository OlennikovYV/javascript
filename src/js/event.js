function rotate(str) {
  return str.split('').map(e => (str = str.slice(1) + str.slice(0, 1)));
}

const testOut = rotate('Hello');
console.log(testOut);

console.log(testOut.includes('elloH')); // true
console.log(testOut.includes('lloHe')); // true
console.log(testOut.includes('loHel')); // true
console.log(testOut.includes('oHell')); // true
console.log(testOut.includes('Hello')); // true
