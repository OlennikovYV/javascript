function decipherThis(str) {
  const array = str.split(' ');
  const firstChar = array.map(word => parseInt(word));
  const wordChar = array.map(word => {
    let chars = (word.match(/[a-z]+/gi) || []).join('');
    if (chars) {
      if (chars.length > 1) {
        const first = chars.slice(0, 1);
        const last = chars.slice(-1);
        chars = last + chars.slice(1, -1) + first;
      }
    } else chars = '';

    return chars;
  });

  return array
    .map(
      (word, index) => String.fromCharCode(firstChar[index]) + wordChar[index]
    )
    .join(' ');
}

console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
);
// 'Have a go at this and see how you do'
