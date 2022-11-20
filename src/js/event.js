function tripleX(str) {
  const indexX = str.indexOf('x');

  return indexX > -1 && indexX === str.indexOf('xxx');
}

console.log(tripleX('abraxxxas')); // true
console.log(tripleX('xoxotrololololololoxxx')); // false
console.log(tripleX('soft kitty, warm kitty, xxxxx')); // true
console.log(tripleX('softx kitty, warm kitty, xxxxx')); // false
