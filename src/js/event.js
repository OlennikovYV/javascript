function solve(s) {
  const CODE_CHAR_A = 96;
  const numAlpha = alpha => alpha.charCodeAt(0) - CODE_CHAR_A;

  let arraySubstConsonants = s.match(/[^aeiou]+/g);

  arraySubstConsonants = arraySubstConsonants.map(el => {
    return el.split('').reduce((acc, el) => acc + numAlpha(el), 0);
  }, 0);

  return Math.max(...arraySubstConsonants);
}

console.log(solve('zodiac')); //  26
console.log(solve('chruschtschov')); //  80
console.log(solve('khrushchev')); //  38
console.log(solve('strength')); //  57
console.log(solve('catchphrase')); //  73
console.log(solve('twelfthstreet')); //  103
console.log(solve('mischtschenkoana')); //  80
