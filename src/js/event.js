function kebabize(str) {
  return str
    .replace(/\d/g, '')
    .replace(/(\B[A-Z])/g, x => '-' + x)
    .toLowerCase();
}

console.log(kebabize('myCamelCasedString')); // 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')); // 'my-camel-has-humps'
console.log(kebabize('9p16m')); // 'pm'
