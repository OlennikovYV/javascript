function capitalize(s, arr) {
  let result = '';

  for (let i = 0; i < s.length; i += 1) {
    if (arr.indexOf(i) !== -1) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log(capitalize('abcdef', [1, 2, 5])); // 'aBCdeF'
console.log(capitalize('abcdef', [1, 2, 5, 100])); // 'aBCdeF'
console.log(capitalize('codewars', [1, 3, 5, 50])); // 'cOdEwArs'
console.log(capitalize('abracadabra', [2, 6, 9, 10])); // 'abRacaDabRA'
console.log(capitalize('codewarriors', [5])); // 'codewArriors'
console.log(capitalize('indexinglessons', [0])); // 'Indexinglessons'
