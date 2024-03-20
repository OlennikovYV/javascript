function whoTookTheCarKey(message) {
  return String.fromCharCode(...message.map(el => parseInt(Number(el), 2)));
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
