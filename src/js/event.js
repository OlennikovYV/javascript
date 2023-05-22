function firstNonRepeated(s) {
  return [...s].find(char => s.indexOf(char) === s.lastIndexOf(char)) || null;
}

console.log(firstNonRepeated('test')); // 'e'
console.log(firstNonRepeated('teeter')); // 'r'
console.log(firstNonRepeated('1122321235121222')); // '5'
console.log(firstNonRepeated('rend')); // 'r'
console.log(firstNonRepeated('aabbcc')); // null
