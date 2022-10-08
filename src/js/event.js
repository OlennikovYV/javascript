function typeValidation(variable, type) {
  return typeof variable === type;
}

console.log(typeValidation(42, 'number')); // true
console.log(typeValidation('42', 'number')); // false
