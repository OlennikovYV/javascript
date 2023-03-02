function charConcat(string) {
  const step = Math.floor(string.length / 2);
  const length = string.length;
  let result = '';

  for (let i = 0; i < step; i += 1) {
    const left = string[i];
    const right = string[Math.abs(i - length) - 1];
    result += left + right + (i + 1);
  }

  return result;
}

console.log(charConcat('abc def')); // 'af1be2cd3'
console.log(charConcat('CodeWars')); // 'Cs1or2da3eW4'
