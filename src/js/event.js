function tripleX(str) {
  const indexX = str.indexOf('x');

  if (indexX === -1) return false;

  return str[indexX + 1] + str[indexX + 2] === 'xx';
}

console.log(tripleX('abraxxxas')); // true
console.log(tripleX('xoxotrololololololoxxx')); // false
console.log(tripleX('soft kitty, warm kitty, xxxxx')); // true
console.log(tripleX('softx kitty, warm kitty, xxxxx')); // false
