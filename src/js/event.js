function alphabetized(s) {
  const onlyAlpha = s.replace(/[^a-z]/gi, '');

  return Array.from(onlyAlpha)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('');
}

console.log(alphabetized('The Holy Bible')); // 'BbeehHilloTy'
