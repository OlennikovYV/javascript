function isItLetter(character) {
  return /[a-z]/i.test(character);
}

console.log(isItLetter('Z')); // true
console.log(isItLetter('a')); // true
console.log(isItLetter('1')); // false
