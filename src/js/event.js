function shorter_reverse_longer(a, b) {
  const lengthA = a.length;
  const lengthB = b.length;
  const reverseLong = (lengthA >= lengthB ? a : b).split('').reverse().join('');
  const shorter = lengthA >= lengthB ? b : a;

  return shorter + reverseLong + shorter;
}

console.log(shorter_reverse_longer('first', 'abcde'));
// 'abcdetsrifabcde'
console.log(shorter_reverse_longer('hello', 'bau'));
// 'bauollehbau');
console.log(shorter_reverse_longer('fghi', 'abcde'));
// 'fghiedcbafghi'
