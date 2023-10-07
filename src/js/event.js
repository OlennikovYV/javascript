function makeSentence(parts) {
  return parts.reduce((phrase, part, index, list) => {
    if (index === 0) return (phrase += part);
    if (index === list.length - 1)
      return (phrase += part === '.' ? '.' : ' ' + part + '.');

    if (part === ',') return (phrase += part);
    if (part === '.') return phrase;

    return phrase + ' ' + part;
  }, '');
}

console.log(makeSentence(['hello', ',', 'my', 'dear'])); // 'hello, my dear.'
console.log(makeSentence(['hello', 'world'])); // 'hello world.
console.log(makeSentence(['hello', 'world', '.'])); // 'hello world.'
console.log(makeSentence(['hello', 'world', '.', '.', '.'])); // 'hello world.'
