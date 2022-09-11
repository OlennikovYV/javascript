function validSpacing(s) {
  return !/^ |  | $/.test(s);
}

console.log(validSpacing('Hello world')); // true
console.log(validSpacing(' Hello world')); // false
console.log(validSpacing('Hello  world ')); // false
console.log(validSpacing('Hello')); // true
console.log(validSpacing('Helloworld')); // true
