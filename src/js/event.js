function swap(string) {
  return string.replace(/[aoieu]/g, vowel => vowel.toUpperCase());
}

console.log(swap('')); // ''
console.log(swap('   @@@')); // '   @@@'
console.log(swap('HelloWorld!')); // 'HEllOWOrld!'
console.log(swap('Sunday')); // 'SUndAy'
console.log(swap('Codewars')); // 'COdEwArs'
console.log(swap('Monday')); // 'MOndAy'
console.log(swap('Friday')); // 'FrIdAy'
console.log(swap('abracadabra')); // 'AbrAcAdAbrA'
console.log(swap('AbrAcAdAbrA')); // 'AbrAcAdAbrA'
console.log(swap('ABRACADABRA')); // 'ABRACADABRA'
console.log(swap('aBRaCaDaBRa')); // 'ABRACADABRA'
