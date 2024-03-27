function isItLetter(character) {
  if (character.toLowerCase() === character.toUpperCase()) return false;

  return true;
}

console.log(isItLetter('Z')); // true
console.log(isItLetter('a')); // true
console.log(isItLetter('1')); // false
