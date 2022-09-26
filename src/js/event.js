function formatWords(words) {
  return (words || [])
    .filter(word => word)
    .join(', ')
    .replace(/(, )+(\S+)$/g, ' and $2');
}

console.log(formatWords(['one', 'two', 'three', 'four'])); // 'one, two, three and four'
console.log(formatWords(['one'])); // 'one'
console.log(formatWords(['one', '', 'three'])); // 'one and three'
console.log(formatWords(['', '', 'three'])); // 'three'
console.log(formatWords(['one', 'two', ''])); // 'one and two'
console.log(formatWords([])); // ''
console.log(formatWords(null)); // ''
console.log(formatWords([''])); // ''
