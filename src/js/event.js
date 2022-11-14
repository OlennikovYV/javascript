function swap(string) {
  return [...string]
    .map(char =>
      ['a', 'o', 'i', 'e', 'u'].includes(char) ? char.toUpperCase() : char
    )
    .join('');
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
