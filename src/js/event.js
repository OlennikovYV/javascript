function removeDuplicateWords(s) {
  const result = new Set(s.split(' '));
  return Array.from(result).join(' ');
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
);
// 'alpha beta gamma delta'
