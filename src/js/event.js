function sortGiftCode(code) {
  return code
    .split('')
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join('');
}

console.log(sortGiftCode('abcdef')); // 'abcdef'
console.log(sortGiftCode('pqksuvy')); // 'kpqsuvy'
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')); // 'abcdefghijklmnopqrstuvwxyz'
