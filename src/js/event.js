function moveVowel(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelArray = [];
  const consonantArray = [];

  for (let i = 0; i < input.length; i = i + 1) {
    const currentAlpha = input[i];

    vowels.includes(currentAlpha)
      ? vowelArray.push(currentAlpha)
      : consonantArray.push(currentAlpha);
  }

  return consonantArray.concat(vowelArray).join``;
}

console.log(moveVowel('day')); // 'dya'
console.log(moveVowel('apple')); // 'pplae'
console.log(moveVowel('peace')); // 'pceae'
console.log(moveVowel('maker')); // 'mkrae'
