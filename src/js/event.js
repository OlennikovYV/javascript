function removeParentheses(s) {
  let result = '';
  let openParenthes = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      openParenthes += 1;
      continue;
    }
    if (s[i] === ')') {
      openParenthes -= 1;
      continue;
    }
    if (openParenthes < 1) result += s[i];
  }

  return result;
}

console.log(removeParentheses('example(unwanted thing)example'));
// 'exampleexample'
console.log(removeParentheses('example (unwanted thing) example'));
// 'example  example'
console.log(removeParentheses('a (bc d)e')); // 'a e'
console.log(removeParentheses('a(b(c))')); // 'a'
console.log(
  removeParentheses('hello example (words(more words) here) something')
);
// 'hello example  something'
console.log(removeParentheses('(first group) (second group) (third group)'));
// '  '
