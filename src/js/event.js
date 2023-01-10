function wordSearch(query, seq) {
  const searchString = new RegExp(query, 'i');
  const filterArray = seq.filter(string => searchString.test(string));

  return filterArray.length ? filterArray : ['Empty'];
}

console.log(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc']));
// ['ab', 'abc', 'zab']
console.log(wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc']));
// ['ab', 'abc', 'zab']
console.log(wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc']));
// ['aB', 'Abc', 'zAB']
console.log(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']));
// ['Empty']
