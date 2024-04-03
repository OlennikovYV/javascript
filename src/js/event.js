function stringExpansion(s) {
  let arrayCountChar = s.match(/(\d?[a-z]+)/gi);

  const convertString = str => {
    const count = str.match(/\d/g) || 1;
    const arrayChar = str.match(/[a-z]/gi);
    let outputString = '';

    for (let i = 0; i < arrayChar.length; i++) {
      outputString += arrayChar[i].repeat(count);
    }

    return outputString;
  };

  return arrayCountChar
    ? arrayCountChar.map(el => convertString(el)).join('')
    : '';
}

console.log(stringExpansion('1111')); // ''
console.log(stringExpansion('')); // ''
console.log(stringExpansion('3abc')); // 'aaabbbccc'
console.log(stringExpansion('3D2a5d2f')); // 'DDDaadddddff'
console.log(stringExpansion('0d0a0v0t0y')); // ''
console.log(stringExpansion('3d332f2a')); // 'dddffaa'
console.log(stringExpansion('abcde')); // 'abcde'
console.log(stringExpansion('a2bcde')); // 'abbccddee'
