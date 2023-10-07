function makeSentence(parts) {
  const phrase = parts.reduce((sumWords, part) => {
    if (part === ',') return sumWords + part;
    if (part === '.') return sumWords;

    return sumWords + ' ' + part;
  });

  return phrase + '.';
}

console.log(makeSentence(['hello', ',', 'my', 'dear'])); // 'hello, my dear.'
console.log(makeSentence(['hello', 'world'])); // 'hello world.
console.log(makeSentence(['hello', 'world', '.'])); // 'hello world.'
console.log(makeSentence(['hello', 'world', '.', '.', '.'])); // 'hello world.'
