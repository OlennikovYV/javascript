const mispelled = function (word1, word2) {
  const lengthWord1 = word1.length;
  const lengthWord2 = word2.length;
  let countDifferent = 0;

  if (word1 === word2) return true;

  if (Math.abs(lengthWord1 - lengthWord2) > 1) return false;

  if (Math.abs(lengthWord1 - lengthWord2) === 1)
    if (word1.includes(word2) || word2.includes(word1)) return true;

  for (let i = 0; i < lengthWord1; i++) {
    if (word1[i] !== word2[i]) countDifferent++;
  }

  return countDifferent <= 1;
};

console.log(mispelled('versed', 'versed')); // true
console.log(mispelled('versed', 'xersed')); // true
console.log(mispelled('versed', 'applb')); // false

console.log(mispelled('versed', 'v5rsed')); // true
console.log(mispelled('1versed', 'versed')); // true
console.log(mispelled('versed', 'versed1')); // true

console.log(mispelled('versed', 'aversed')); // true
console.log(mispelled('aaversed', 'versed')); // false
console.log(mispelled('versed', 'aaversed')); // false
