function longestWord(stringOfWords) {
  return stringOfWords
    .split(' ')
    .reduce((longWord, word) =>
      longWord.length > word.length ? longWord : word
    );
}

console.log(longestWord('a b c d e fgh')); // 'fgh'
console.log(longestWord('one two three')); // 'three'
console.log(longestWord('red blue grey')); // 'grey'
