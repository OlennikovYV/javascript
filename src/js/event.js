function validSpacing(s) {
  let valid = s.trim();
  valid = valid.replace(/\s{2,}/g, ' ');

  return s === valid;
}

console.log(validSpacing('Hello world')); // true
console.log(validSpacing(' Hello world')); // false
console.log(validSpacing('Hello  world ')); // false
console.log(validSpacing('Hello')); // true
console.log(validSpacing('Helloworld')); // true
