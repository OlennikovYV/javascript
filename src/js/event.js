function firstDup(s) {
  return s.split('').find((char, index) => s.lastIndexOf(char) > index);
}

console.log(firstDup('tweet')); // 't'
console.log(firstDup('Ode to Joy')); // ' '
console.log(firstDup('ode to joy')); // 'o'
console.log(firstDup('bar')); // undefined
console.log(firstDup('123123')); // '1'
console.log(firstDup('!@#$!@#$')); // '!'
