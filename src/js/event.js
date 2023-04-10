function remove(string) {
  const countExclamationMark = word => {
    let count = (word.match(/\!/g) || []).length;
    return count != 1;
  };

  return string
    .split(' ')
    .filter(word => countExclamationMark(word))
    .join(' ');
}

console.log(remove('Hi!')); // ''
console.log(remove('Hi! Hi!')); // ''
console.log(remove('Hi! Hi! Hi!')); // ''
console.log(remove('Hi Hi! Hi!')); // 'Hi'
console.log(remove('Hi! !Hi Hi!')); // ''
console.log(remove('Hi! Hi!! Hi!')); // 'Hi!!'
console.log(remove('Hi! !Hi! Hi!')); // '!Hi!'
console.log(
  remove('qcu! obqgs lsal iyhvh !zety! !xsklhd nhcpqjr fmnoio !rhnmde unv')
);
// 'obqgs lsal iyhvh !zety! nhcpqjr fmnoio unv'
