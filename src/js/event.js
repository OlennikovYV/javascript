function containAllRots(strng, arr) {
  for (let i = 0; i < strng.length; i += 1) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) return false;
  }

  return true;
}

console.log(containAllRots('', [])); // true
console.log(containAllRots('', ['bsjq', 'qbsj'])); // true
console.log(
  containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])
); // true
console.log(
  containAllRots('XjYABhR', [
    'TzYxlgfnhf',
    'yqVAuoLjMLy',
    'BhRXjYA',
    'YABhRXj',
    'hRXjYAB',
    'jYABhRX',
    'XjYABhR',
    'ABhRXjY',
  ])
); // false
