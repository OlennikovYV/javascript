function remove(string) {
  return string
    .split(' ')
    .filter(word => word.split('!').length != 2)
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
