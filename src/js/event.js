function switcheroo(x) {
  return x.replace(/[ab]/g, x => (x === 'a' ? 'b' : 'a'));
}

console.log(switcheroo('abc')); // 'bac'
console.log(switcheroo('aaabcccbaaa')); // 'bbbacccabbb'
console.log(switcheroo('ccccc')); // 'ccccc'
