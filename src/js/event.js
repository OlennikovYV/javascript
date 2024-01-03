SCORES = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function sexyName(name) {
  const sexyScores = name
    .split('')
    .reduce((scores, char) => scores + (SCORES[char.toUpperCase()] || 0), 0);

  if (sexyScores <= 60) return 'NOT TOO SEXY';
  if (sexyScores <= 300) return 'PRETTY SEXY';
  if (sexyScores <= 599) return 'VERY SEXY';

  return 'THE ULTIMATE SEXIEST';
}

console.log(sexyName('GUV')); // 'NOT TOO SEXY'
console.log(sexyName('PHUG')); // 'NOT TOO SEXY'
console.log(sexyName('FFFFF')); // 'NOT TOO SEXY'
console.log(sexyName('')); // 'NOT TOO SEXY'
console.log(sexyName('PHUG')); // 'NOT TOO SEXY'
console.log(sexyName('BOB')); // 'PRETTY SEXY'
console.log(sexyName('JLJ')); // 'PRETTY SEXY'
console.log(sexyName('HHHHHU')); // 'PRETTY SEXY'
console.log(sexyName('BOB')); // 'PRETTY SEXY'
console.log(sexyName('WWWWWU')); // 'PRETTY SEXY'
console.log(sexyName('YOU')); // 'VERY SEXY'
console.log(sexyName('FABIO')); // 'VERY SEXY'
console.log(sexyName('ARUUUUUUUUU')); // 'VERY SEXY'
console.log(sexyName('ROBBY')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('SAMANTHA')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('DONALD TRUMP')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('BILL GATES')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('SCARLETT JOHANSSON')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('CODEWARS')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('PAMELA ANDERSON')); // 'THE ULTIMATE SEXIEST'
console.log(sexyName('Lxu')); // 'PRETTY SEXY'
console.log(sexyName('wK l u hWIiwbZ')); // 'THE ULTIMATE SEXIEST'
