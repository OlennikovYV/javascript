function scrollingText(text) {
  let result = [];

  for (let i = 0; i < text.length; i += 1) {
    pushingText = text.slice(i) + text.slice(0, i);
    result.push(pushingText.toUpperCase());
  }

  return result;
}

console.log(scrollingText('abc')); // ['ABC', 'BCA', 'CAB']
