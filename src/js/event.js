const makeUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);

console.log(makeUpperCase('hello'));//HELLO
console.log(makeUpperCase('Sam'));//SAM
console.log(makeUpperCase('San Francisco'));//SAN FRANCISCO