function freqSeq(str, sep) {
  const arrStr = Array.from(str);
  const countChar = arrStr.reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});

  return arrStr.map(char => countChar[char]).join(sep);
}

console.log(freqSeq('hello world', '-')); // '1-1-3-3-2-1-1-2-1-3-1'
console.log(freqSeq('19999999', ':')); // '1:7:7:7:7:7:7:7'
console.log(freqSeq('^^^**$', 'x')); // '3x3x3x2x2x1'
