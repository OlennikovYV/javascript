function scrollingText(text) {
  const resultArray = [];
  const originalText = text.toUpperCase();

  for (let i = 0; i < text.length; i += 1)
    resultArray.push(originalText.slice(i) + originalText.slice(0, i));

  return resultArray;
}

console.log(scrollingText('abc')); // ['ABC', 'BCA', 'CAB']
