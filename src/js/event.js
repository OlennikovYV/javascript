function absentVowel(x) {
  const vowels = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  for (let key of Object.keys(vowels)) {
    if (!x.includes(key.toLocaleLowerCase())) return vowels[key];
  }
}

console.log(absentVowel('John Doe hs seven red pples under his bsket'));
// 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'));
// 3
