function formatWords(words) {
  function convertString(array) {
    let result;
    let arrayWord = array.filter(word => word !== '');

    if (arrayWord.length > 1) {
      let index;

      result = arrayWord.join(', ');
      index = result.lastIndexOf(',');
      result = result.replace(/,/g, (ch, i) => (i === index ? ' and' : ch));
    } else result = arrayWord.join('');

    return result;
  }

  return words && words.length !== 0 ? convertString(words) : '';
}

console.log(formatWords(['one', 'two', 'three', 'four'])); // 'one, two, three and four'
console.log(formatWords(['one'])); // 'one'
console.log(formatWords(['one', '', 'three'])); // 'one and three'
console.log(formatWords(['', '', 'three'])); // 'three'
console.log(formatWords(['one', 'two', ''])); // 'one and two'
console.log(formatWords([])); // ''
console.log(formatWords(null)); // ''
console.log(formatWords([''])); // ''
