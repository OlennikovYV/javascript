function contamination(text, char) {
  if (!text || !char) return '';

  return text.replace(/./g, char);
}

console.log(contamination('abc', 'z')); // 'zzz'
console.log(contamination('', 'z')); // ''
console.log(contamination('abc', '')); // ''
console.log(contamination('_3ebzgh4', '&')); // '&&&&&&&&'
console.log(contamination('//case', ' ')); // '      '
