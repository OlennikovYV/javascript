function cleanString(s) {
  const result = [];

  s.split('').map(el => (el === '#' ? result.pop() : result.push(el)));

  return result.join('');
}

console.log(cleanString('abc#d##c')); // 'ac'
console.log(cleanString('abc####d##c#')); // ''
console.log(cleanString('abc##d######')); // ''
console.log(cleanString('#######')); // ''
console.log(cleanString('')); // ''
