function scrollingText(text) {
  const originalText = text.toUpperCase();

  return originalText
    .split('')
    .map((_, i) => originalText.slice(i) + originalText.slice(0, i));
}

console.log(scrollingText('abc')); // ['ABC', 'BCA', 'CAB']
