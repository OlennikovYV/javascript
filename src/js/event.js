function wordsToSentence(words) {
  return words.reduce((string, word) => (string + ' ').concat(word));
}

console.log(wordsToSentence(['hello', 'world'])); // 'hello world'
