function kebabize(str) {
  return str
    .replace(/\d/g, '')
    .split(/(?=[A-Z]+)/g)
    .join('-')
    .toLowerCase();
}

console.log(kebabize('myCamelCasedString')); // 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')); // 'my-camel-has-humps'
console.log(kebabize('9p16m')); // 'pm'
