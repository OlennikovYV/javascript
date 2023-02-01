function solve(a, b) {
  let result = '';
  const uniqueChar = (a, b) =>
    a
      .split('')
      .filter(el => b.indexOf(el) === -1)
      .join('');

  result += uniqueChar(a, b);
  result += uniqueChar(b, a);

  return result;
}

console.log(solve('xyab', 'xzca')); // 'ybzc'
console.log(solve('xyabb', 'xzca')); // 'ybbzc'
console.log(solve('abcd', 'xyz')); // 'abcdxyz'
console.log(solve('xxx', 'xzca')); // 'zca'
