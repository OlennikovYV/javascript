function capitalize(s) {
  let capitalizeEven = '';
  let capitalizeOdd = '';

  for (let i = 0; i < s.length; i += 1) {
    i % 2 === 0
      ? (capitalizeEven += s[i].toUpperCase())
      : (capitalizeEven += s[i].toLowerCase());

    i % 2 !== 0
      ? (capitalizeOdd += s[i].toUpperCase())
      : (capitalizeOdd += s[i].toLowerCase());
  }

  return [capitalizeEven, capitalizeOdd];
}

console.log(capitalize('abcdef')); //['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); //['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); //['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize('codewarriors')); //['CoDeWaRrIoRs', 'cOdEwArRiOrS']
