function whoTookTheCarKey(message) {
  return message.reduce(
    (codeString, charBin) =>
      codeString + String.fromCodePoint(parseInt(charBin, 2)),
    ''
  );
}

console.log(
  whoTookTheCarKey([
    '01000001',
    '01101100',
    '01100101',
    '01111000',
    '01100001',
    '01101110',
    '01100100',
    '01100101',
    '01110010',
  ])
);
// 'Alexander'
