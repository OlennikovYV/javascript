function nameShuffler(str) {
  const reverseString = str;

  return reverseString.split(' ').reverse().join(' ');
}

console.log(nameShuffler('john McClane')); // 'McClane john'
