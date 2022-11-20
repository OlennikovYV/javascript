function tripleX(str) {
  return str.substr(str.indexOf('x') + 1, 2) === 'xx';
}

console.log(tripleX('abraxxxas')); // true
console.log(tripleX('xoxotrololololololoxxx')); // false
console.log(tripleX('soft kitty, warm kitty, xxxxx')); // true
console.log(tripleX('softx kitty, warm kitty, xxxxx')); // false
