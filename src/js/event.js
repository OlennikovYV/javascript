function moveTen(s) {
  return s
    .split('')
    .map(char => {
      const codePlus10 = char.charCodeAt(0) + 10;
      let checkOver = codePlus10 % 122;
      checkOver = checkOver < 96 && checkOver > 0 ? checkOver + 96 : codePlus10;
      return String.fromCodePoint(checkOver);
    })
    .join('');
}

console.log(moveTen('testcase')); // 'docdmkco'
console.log(moveTen('codewars')); // 'mynogkbc'
console.log(moveTen('exampletesthere')); // 'ohkwzvodocdrobo'
