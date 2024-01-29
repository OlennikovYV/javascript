function sortVowels(s) {
  const result = [];

  if (typeof s !== 'string') return '';

  s.split('').forEach(char => {
    const vowels = 'aeiouAEIOU';
    let sortChar = vowels.includes(char) ? '|' + char : char + '|';

    result.push(sortChar);
  });

  return result.join('\n');
}

console.log(sortVowels('Codewars')); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('Rnd Te5T')); // 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
console.log(sortVowels(1337)); // ''
console.log(sortVowels(undefined)); // ''
