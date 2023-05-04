function wordsToSentence(words) {
  return words.reduce((string, word) => string + ' ' + word);
}

console.log(wordsToSentence(['hello', 'world'])); // 'hello world'
