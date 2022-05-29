function remove(string) {
  return string.replace(/\!$/, '');
}

console.log(remove('Hi!')); //  'Hi'
console.log(remove('Hi!!!')); //  'Hi!!'
console.log(remove('!Hi')); //  '!Hi'
console.log(remove('!Hi!')); //  '!Hi'
console.log(remove('Hi! Hi!')); //  'Hi! Hi'
console.log(remove('Hi')); //  'Hi'
