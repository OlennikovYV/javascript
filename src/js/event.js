function missingWord(nums, str) {
  const stringFind = str.replace(/ /g, '').toLowerCase();
  const ascSorting = (a, b) => a - b;
  const arrayFounded = nums.sort(ascSorting).map(index => stringFind[index]);

  if (Math.max(...nums) > stringFind.length) return 'No mission today';

  return arrayFounded.join('');
}

console.log(missingWord([5, 0, 3], 'I love you')); // 'ivy'
console.log(
  missingWord([29, 31, 8], 'The quick brown fox jumps over the lazy dog')
); // 'bay'
console.log(missingWord([12, 4, 6], 'Good Morning')); // 'No mission today'
