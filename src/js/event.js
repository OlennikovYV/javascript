function sortMyString(s) {
  const oddString = s
    .split('')
    .filter((char, index) => index % 2 === 0)
    .join('');

  const evenString = s
    .split('')
    .filter((char, index) => index % 2 !== 0)
    .join('');

  return oddString + ' ' + evenString;
}

console.log(sortMyString('CodeWars')); // 'CdWr oeas'
console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER"
