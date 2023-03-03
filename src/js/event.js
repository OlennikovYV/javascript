function makePassword(phrase) {
  const num = { i: 1, o: 0, s: 5 };

  return phrase
    .split(' ')
    .map(word => {
      const char = word.charAt(0);
      const numChar = num[char.toLowerCase()];
      return numChar != undefined ? numChar : char;
    })
    .join('');
}

console.log(makePassword('Give me liberty or give me death')); // 'Gml0gmd'
console.log(makePassword('Keep Calm and Carry On')); // 'KCaC0'
