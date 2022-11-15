const scrollingText = text =>
  text.toUpperCase() &&
  text
    .split('')
    .map((_, i) => originalText.slice(i) + originalText.slice(0, i));

console.log(scrollingText('abc')); // ['ABC', 'BCA', 'CAB']
