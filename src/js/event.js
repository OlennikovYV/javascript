function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .map(word =>
      word
        .split('')
        .map(char =>
          char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}

console.log(stringTransformer('Example string')); // 'STRING eXAMPLE');
