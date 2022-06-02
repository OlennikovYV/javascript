function capitalize(s) {
  const arrayString = s.split('');

  const even = arrayString.map((el, i) => {
    return i % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
  });
  const odd = arrayString.map((el, i) => {
    return i % 2 !== 0 ? el.toUpperCase() : el.toLowerCase();
  });

  return [even.join(''), odd.join('')];
}

console.log(capitalize('abcdef')); //['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); //['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); //['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize('codewarriors')); //['CoDeWaRrIoRs', 'cOdEwArRiOrS']
