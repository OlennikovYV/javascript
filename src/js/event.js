function position(letter) {
  const BEGIN_ALPHABET = 96;
  return `Position of alphabet: ${letter.charCodeAt(0) - BEGIN_ALPHABET}`;
}

console.log(position('a')); // 'Position of alphabet: 1'
console.log(position('z')); // 'Position of alphabet: 26'
console.log(position('e')); // 'Position of alphabet: 5'
