function decipherThis(str) {
  return str
    .split(' ')
    .map(word =>
      word
        .replace(/^\d+/, num => String.fromCharCode(num))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
    )
    .join(' ');
}

console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
);
// 'Have a go at this and see how you do'
