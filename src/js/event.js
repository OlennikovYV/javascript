var firstName = {
  A: 'Alpha',
  B: 'Beta',
  C: 'Cache',
  D: 'Data',
  E: 'Energy',
  F: 'Function',
  G: 'Glitch',
  H: 'Half-life',
  I: 'Ice',
  J: 'Java',
  K: 'Keystroke',
  L: 'Logic',
  M: 'Malware',
  N: 'Nagware',
  O: 'OS',
  P: 'Phishing',
  Q: 'Quantum',
  R: 'RAD',
  S: 'Strike',
  T: 'Trojan',
  U: 'Ultraviolet',
  V: 'Vanilla',
  W: 'WiFi',
  X: 'Xerox',
  Y: 'Y',
  Z: 'Zero',
};

var surname = {
  A: 'Analogue',
  B: 'Bomb',
  C: 'Catalyst',
  D: 'Discharge',
  E: 'Electron',
  F: 'Faraday',
  G: 'Gig',
  H: 'Hacker',
  I: 'IP',
  J: 'Jabber',
  K: 'Killer',
  L: 'Lazer',
  M: 'Mike',
  N: 'n00b',
  O: 'Overclock',
  P: 'Payload',
  Q: 'Quark',
  R: 'Roy',
  S: 'Spy',
  T: 'T-Rex',
  U: 'Unit',
  V: 'Virus',
  W: 'Worm',
  X: 'X',
  Y: 'Yob',
  Z: 'Zombie',
};

function aliasGen(first, second) {
  const checkFirstChar = char => /[A-Z]/i.test(char);

  if (checkFirstChar(first[0]) !== true || checkFirstChar(second[0]) !== true)
    return 'Your name must start with a letter from A - Z.';

  return `${firstName[first[0].toUpperCase()]} ${
    surname[second[0].toUpperCase()]
  }`;
}

console.log(aliasGen('Mike', 'Millington')); // 'Malware Mike');
console.log(aliasGen('Fahima', 'Tash')); // 'Function T-Rex');
console.log(aliasGen('Daisy', 'Petrovic')); // 'Data Payload');
console.log(aliasGen('7393424', 'Anumbha')); // 'Your name must start with a letter from A - Z.'
console.log(aliasGen('Anuddanumbha', '23200')); // 'Your name must start with a letter from A - Z.'
