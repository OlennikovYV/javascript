function remove(string) {
  return string.replace(/\b!+/g, '');
}

console.log(remove('Hi!')); // 'Hi'
console.log(remove('Hi!!!')); // 'Hi'
console.log(remove('!Hi')); // '!Hi'
console.log(remove('!Hi!')); // '!Hi'
console.log(remove('Hi! Hi!')); // 'Hi Hi'
console.log(remove('!!!Hi !!hi!!! !hi')); // '!!!Hi !!hi !hi'
