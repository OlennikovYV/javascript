function scramble(str, arr) {
  return [...str]
    .reduce((array, char, i) => {
      array[arr[i]] = char;
      return array;
    }, [])
    .join('');
}

console.log(scramble('abcd', [0, 3, 1, 2])); // 'acdb'
console.log(scramble('sc301s', [4, 0, 3, 1, 5, 2])); // 'c0s3s1'
console.log(scramble('bskl5', [2, 1, 4, 3, 0])); // '5sblk',
