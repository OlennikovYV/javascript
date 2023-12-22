function absentVowel(x) {
  return [...'aeiou'].findIndex(letter => !x.includes(letter));
}

console.log(absentVowel('John Doe hs seven red pples under his bsket'));
// 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'));
// 3
