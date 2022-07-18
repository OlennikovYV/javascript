function reverse(str) {
  return (
    str.trim() &&
    str
      .split(' ')
      .map((word, index) => {
        if (index % 2 !== 0) {
          return word.split('').reverse().join('');
        }

        return word;
      })
      .join(' ')
  );
}

console.log(reverse('  ')); // ''
console.log(reverse('Reverse this string, please!'));
// 'Reverse siht string, !esaelp'
console.log(reverse("I really don't like reversing strings!"));
// "I yllaer don't ekil reversing !sgnirts"
