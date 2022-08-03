function aliasGen(first, second) {
  const checkFirstChar = char => /[A-Z]/i.test(char);

  if (checkFirstChar(first[0]) !== true || checkFirstChar(second[0]) !== true)
    return 'Your name must start with a letter from A - Z.';

  return `${firstName[first[0].toUpperCase()]} ${
    surname[second[0].toUpperCase()]
  }`;
}

// console.log(aliasGen('Mike', 'Millington')); // 'Malware Mike');
// console.log(aliasGen('Fahima', 'Tash')); // 'Function T-Rex');
// console.log(aliasGen('Daisy', 'Petrovic')); // 'Data Payload');
// console.log(aliasGen('7393424', 'Anumbha')); // 'Your name must start with a letter from A - Z.'
// console.log(aliasGen('Anuddanumbha', '23200')); // 'Your name must start with a letter from A - Z.'
