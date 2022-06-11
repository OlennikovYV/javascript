function solve(arr) {
  const isIndexAlphabeticCharacter = (char, index) => {
    const INDEX_BEGUN_ALPHABET = 96;
    const indexInAlphabet = char.toLowerCase().charCodeAt(0);

    return indexInAlphabet - INDEX_BEGUN_ALPHABET === index + 1;
  };

  const countCharSymmetry = string => {
    return string.split('').reduce((acc, el, index) => {
      if (isIndexAlphabeticCharacter(el, index)) acc += 1;
      return acc;
    }, 0);
  };

  // debugger;
  return arr.map(el => {
    const count = countCharSymmetry(el);
    if (count > 0) return count;
    return count;
  });
}

console.log(solve(['abode', 'ABc', 'xyzD'])); // [4,3,1]
console.log(solve(['abide', 'ABc', 'xyz'])); // [4,3,0]
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])); // [6, 5, 7]
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
