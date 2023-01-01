function scale(strng, k, n) {
  let result = strng.split('\n');

  return strng === ''
    ? ''
    : result
        .map(str => {
          const horzRepeat = str
            .split('')
            .map(char => char.repeat(k))
            .join('');
          const vertRepeat = (horzRepeat + '\n').repeat(n);

          return vertRepeat;
        })
        .join('')
        .slice(0, -1);
}

const a = 'abcd\nefgh\nijkl\nmnop';
const r =
  'aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp';

console.log(scale(a, 2, 3)); // r
console.log(scale('', 5, 5)); // ''
console.log(scale('Kj\nSH', 1, 2)); // 'Kj\nKj\nSH\nSH'
