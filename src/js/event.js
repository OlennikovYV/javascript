function nicknameGenerator(name) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (name.length < 4) return `Error: Name too short`;

  if (!vowels.includes(name[2])) return name.slice(0, 3);

  return name.slice(0, 4);
}

console.log(nicknameGenerator('Jimmy')); // 'Jim'
console.log(nicknameGenerator('Samantha')); // 'Sam'
console.log(nicknameGenerator('Sam')); // 'Error: Name too short'
console.log(nicknameGenerator('Kayne')); // 'Kay', "'y' is not a vowel"
console.log(nicknameGenerator('Melissa')); // 'Mel'
console.log(nicknameGenerator('James')); // 'Jam'
