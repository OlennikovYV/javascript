function scramble(str, arr) {
  return arr.map((_, i) => str[arr.indexOf(i)]).join('');
}

console.log(scramble('abcd', [0, 3, 1, 2])); // 'acdb'
console.log(scramble('sc301s', [4, 0, 3, 1, 5, 2])); // 'c0s3s1'
console.log(scramble('bskl5', [2, 1, 4, 3, 0])); // '5sblk',
