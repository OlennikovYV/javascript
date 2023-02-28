function alienLanguage(str) {
  return str.toUpperCase().replace(/\w\b/g, last => last.toLowerCase());
}

console.log(alienLanguage('My name is John')); // 'My NAMe Is JOHn'
console.log(alienLanguage('this is an example')); // 'THIs Is An EXAMPLe'
console.log(alienLanguage('Hello World')); // 'HELLo WORLd'
console.log(alienLanguage('HELLO WORLD')); // 'HELLo WORLd'
