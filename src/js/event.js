function negationValue(string, value) {
  return string.length % 2 ? !value : Boolean(value);
}

console.log(negationValue('!', false)); // true
console.log(negationValue('!', true)); // false
console.log(negationValue('!!!', [])); // false
console.log(negationValue('!!!', -1)); // false
