function firstNonRepeated(s) {
  for (let i = 0; i < s.length; i += 1)
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) return s[i];

  return null;
}

console.log(firstNonRepeated('test')); // 'e'
console.log(firstNonRepeated('teeter')); // 'r'
console.log(firstNonRepeated('1122321235121222')); // '5'
console.log(firstNonRepeated('rend')); // 'r'
console.log(firstNonRepeated('aabbcc')); // null
