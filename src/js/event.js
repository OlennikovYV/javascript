function mirror(text) {
  const arrayWords = text.split(' ');
  const width = Math.max.apply(
    null,
    arrayWords.map(word => word.length)
  );
  const lineBorder = ['*'.repeat(width + 4)];
  const wordsReverse = arrayWords
    .map(word => {
      return (
        '* ' +
        word.split('').reverse().join('') +
        ' '.repeat(width - word.length) +
        ' *'
      );
    })
    .join('\n');

  return `${lineBorder}\n${wordsReverse}\n${lineBorder}`;
}

console.log(mirror('Hello World'));
// '*********\n* olleH *\n* dlroW *\n*********'
console.log(mirror('Codewars'));
// '************\n* srawedoC *\n************'
console.log(mirror('sgwgy mwit bfc'));
// '*********\n* ygwgs *\n* tiwm  *\n* cfb   *\n*********'
