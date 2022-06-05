function vowelIndices(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  return word.split('').reduce((acc, el, i) => {
    if (vowels.includes(el.toLowerCase())) acc.push(i + 1);
    return acc;
  }, []);
}

console.log(vowelIndices('mmm')); // []
console.log(vowelIndices('apple')); // [1, 5]
console.log(vowelIndices('super')); // [2, 4]
console.log(vowelIndices('orange')); // [1, 3, 6]
