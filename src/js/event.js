function stringExpansion(s) {
  return s.replace(/\d\D*/g, m =>
    m.slice(1).replace(/./g, n => n.repeat(m[0]))
  );
}

console.log(stringExpansion('1111')); // ''
console.log(stringExpansion('')); // ''
console.log(stringExpansion('3abc')); // 'aaabbbccc'
console.log(stringExpansion('3D2a5d2f')); // 'DDDaadddddff'
console.log(stringExpansion('0d0a0v0t0y')); // ''
console.log(stringExpansion('3d332f2a')); // 'dddffaa'
console.log(stringExpansion('abcde')); // 'abcde'
console.log(stringExpansion('a2bcde')); // 'abbccddee'
