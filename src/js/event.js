function findChildren(dancingBrigade) {
  const countChars = {};
  let sortChar;

  dancingBrigade.split('').map(char => {
    char = char.toLowerCase();
    countChars[char] ? (countChars[char] += 1) : (countChars[char] = 1);
  });

  sortChar = Object.keys(countChars).sort();

  return sortChar
    .map(char => {
      let charString = char.toUpperCase();
      return charString + char.repeat(countChars[char] - 1);
    })
    .join('');
}

console.log(findChildren('beeeEBb')); // 'BbbEeee'
console.log(findChildren('uwwWUueEe')); // 'EeeUuuWww'
console.log(findChildren('abBA')); // 'AaBb'
console.log(findChildren('AaaaaZazzz')); // 'AaaaaaZzzz'
console.log(findChildren('CbcBcbaA')); // 'AaBbbCcc'
console.log(findChildren('xXfuUuuF')); // 'FfUuuuXx'
