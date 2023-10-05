function stringChunk(str, n) {
  const chunks = [];

  if (n <= 0 || Number.isInteger(n) === false) return chunks;

  for (let i = 0; i < str.length; i += n) {
    chunks.push(str.slice(i, i + n));
  }

  return chunks;
}

console.log(stringChunk('codewars', 2)); //  ['co', 'de', 'wa', 'rs']
console.log(stringChunk('thiskataeasy', 4)); // ['this', 'kata', 'easy']
console.log(stringChunk('hello world', 3)); // ['hel', 'lo ', 'wor', 'ld']
console.log(stringChunk('sunny day', 0)); // []
