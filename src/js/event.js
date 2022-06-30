function switcheroo(x) {
  return x
    .split('')
    .map(el => {
      if (el === 'a') return 'b';
      if (el === 'b') return 'a';
      return el;
    })
    .join('');
}

console.log(switcheroo('abc')); // 'bac'
console.log(switcheroo('aaabcccbaaa')); // 'bbbacccabbb'
console.log(switcheroo('ccccc')); // 'ccccc'
