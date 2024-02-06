function alphabetWar(fight) {
  const sideScores = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let score = 0;
  const explosedBomb = fight.replace(/\w?\*+\w?/g, '');

  explosedBomb.split('').forEach(letter => {
    const letterPower = sideScores[letter];

    score += letterPower ? letterPower : 0;
  });

  return score === 0
    ? "Let's fight again!"
    : score < 0
    ? 'Left side wins!'
    : 'Right side wins!';
}

console.log(alphabetWar('z')); // 'Right side wins!'
console.log(alphabetWar('****')); // "Let's fight again!"
console.log(alphabetWar('z*dq*mw*pb*s')); // "Let's fight again!"
console.log(alphabetWar('zdqmwpbs')); // "Let's fight again!"
console.log(alphabetWar('zz*zzs')); // 'Right side wins!'
console.log(alphabetWar('sz**z**zs')); // 'Left side wins!'
console.log(alphabetWar('z*z*z*zs')); // 'Left side wins!'
console.log(alphabetWar('*wwwwww*z*')); // 'Left side wins!'
