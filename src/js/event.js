function missingWord(nums, str) {
  const stringFind = str.replace(/ /g, '').toLowerCase();
  const arrayFounded = nums
    .sort((a, b) => a - b)
    .map(index => stringFind[index]);
  const isAllFounded = arrayFounded.every(el => el);

  return isAllFounded ? arrayFounded.join('') : 'No mission today';
}

console.log(missingWord([5, 0, 3], 'I love you')); // 'ivy'
console.log(
  missingWord([29, 31, 8], 'The quick brown fox jumps over the lazy dog')
); // 'bay'
console.log(missingWord([12, 4, 6], 'Good Morning')); // 'No mission today'
