function encode(str, n) {
  const codeAtStart = 96;
  const codeArray = [];
  const secretWord = String(n);

  str.split('').map((char, index) => {
    const codeChar = char.charCodeAt(0) - codeAtStart;
    let indexSecretWord =
      index >= secretWord.length ? index % secretWord.length : index;
    codeArray.push(codeChar + Number(secretWord[indexSecretWord]));
  });

  return codeArray;
}

console.log(encode('scout', 1939)); // [20, 12, 18, 30, 21]);
console.log(encode('masterpiece', 1939)); // [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
