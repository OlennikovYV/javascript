function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    const lastIndex = s.lastIndexOf(s[i]);
    if (lastIndex > i) return s[i];
  }
}

console.log(firstDup('tweet')); // 't'
console.log(firstDup('Ode to Joy')); // ' '
console.log(firstDup('ode to joy')); // 'o'
console.log(firstDup('bar')); // undefined
console.log(firstDup('123123')); // '1'
console.log(firstDup('!@#$!@#$')); // '!'
