function validateHello(greetings) {
  const hello = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  return new RegExp(hello.join('|'), 'i').test(greetings);
}

console.log(validateHello('ahoj')); // true
console.log(validateHello('meh')); // false
