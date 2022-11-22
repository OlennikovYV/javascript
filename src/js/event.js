function binaryToString(binary) {
  return binary.replace(/[01]{8}/g, el => String.fromCharCode(parseInt(el, 2)));
}

console.log(binaryToString('')); // ''

//Test apha chars
console.log(binaryToString('01100001'));
// 'a'
console.log(
  binaryToString('01001011010101000100100001011000010000100101100101000101')
);
// 'KTHXBYE'

//Test numeric
console.log(binaryToString('00110001001100000011000100110001'));
// '1011'

//Test special chars
console.log(binaryToString('001111000011101000101001'));
// '<:)'
