function wordValue(a) {
  function sumChar(str) {
    return [...str].reduce(
      (sum, char) => (char !== ' ' ? sum + char.charCodeAt(0) - 96 : sum),
      0
    );
  }

  return a.map((word, i) => sumChar(word) * (i + 1));
}

console.log(wordValue(['codewars', 'abc', 'xyz'])); // [88, 12, 225]
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])); // [12, 24, 18, 24]
