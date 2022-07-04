function toFreud(string) {
  if (string === '') return '';
  return Array.from(Array(string.split(' ').length))
    .fill('sex')
    .join(' ');
}

console.log(toFreud('')); // ''
console.log(toFreud('test')); // 'sex'
console.log(toFreud('This is a test')); // 'sex sex sex sex'
console.log(toFreud('This is a longer test')); // 'sex sex sex sex sex'
console.log(toFreud("You're becoming a true freudian expert")); //  'sex sex sex sex sex sex'
