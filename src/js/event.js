function sortMyString(s) {
  const oddString = [];
  const evenString = [];

  s.split('').map((char, index) => {
    if (index % 2 === 0) oddString.push(char);
    if (index % 2 !== 0) evenString.push(char);
  });

  return oddString.join('') + ' ' + evenString.join('');
}

console.log(sortMyString('CodeWars')); // 'CdWr oeas'
console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER"
