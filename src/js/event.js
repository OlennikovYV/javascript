function wordPattern(word) {
  let count = 0;
  const guide = [];

  return word
    .split('')
    .map(alpa => {
      alpa = alpa.toLowerCase();

      if (guide.includes(alpa) === false) {
        guide[count] = alpa;
        return count++;
      } else {
        const index = guide.indexOf(alpa);
        return index;
      }
    })
    .join('.');
}

console.log(wordPattern('hello')); // '0.1.2.2.3'
console.log(wordPattern('heLlo')); // '0.1.2.2.3'
console.log(wordPattern('helLo')); // '0.1.2.2.3'
console.log(wordPattern('Hippopotomonstrosesquippedaliophobia'));
// '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13'
