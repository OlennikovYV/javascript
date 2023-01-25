function evenChars(string) {
  const length = string.length;
  return length < 2 || length > 100
    ? 'invalid string'
    : string.split('').filter((_, index) => index % 2 !== 0);
}

console.log(evenChars('1234')); // ['2', '4']
console.log(evenChars(';;;--')); // [';', '-']
console.log(evenChars('abcdefghijklm')); // ['b', 'd', 'f', 'h', 'j', 'l']
console.log(
  evenChars(
    'aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva'
  )
); // 'invalid string'
console.log(evenChars('a')); // 'invalid string'
console.log(evenChars('')); // 'invalid string'
