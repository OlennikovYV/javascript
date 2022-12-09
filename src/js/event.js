function tripleTrouble(one, two, three) {
  return one
    .split('')
    .reduce((sumString, char, i) => sumString + char + two[i] + three[i], '');
}

console.log(tripleTrouble('aaa', 'bbb', 'ccc')); // 'abcabcabc'
console.log(tripleTrouble('aaaaaa', 'bbbbbb', 'cccccc')); //
('abcabcabcabcabcabc');
console.log(tripleTrouble('burn', 'reds', 'roll')); // 'brrueordlnsl'
console.log(tripleTrouble('Sea', 'urn', 'pms')); // 'Supermans'
console.log(tripleTrouble('LLh', 'euo', 'xtr')); // 'LexLuthor'
