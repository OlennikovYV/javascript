function cleanString(s) {
  return s
    .split('')
    .reduce(
      (result, el) => (el === '#' ? result.slice(0, -1) : result + el),
      ''
    );
}

console.log(cleanString('abc#d##c')); // 'ac'
console.log(cleanString('abc####d##c#')); // ''
console.log(cleanString('abc##d######')); // ''
console.log(cleanString('#######')); // ''
console.log(cleanString('')); // ''
