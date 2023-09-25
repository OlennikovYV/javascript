function eliminateUnsetBits(number) {
  return parseInt(number.replaceAll('0', '') || 0, 2);
}

console.log(eliminateUnsetBits('11010101010101')); // 255
console.log(eliminateUnsetBits('111')); // 7
console.log(eliminateUnsetBits('1000000')); // 1
console.log(eliminateUnsetBits('000')); // 0
