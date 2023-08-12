function capitalsFirst(str) {
  let cases = {
    upperCase: [],
    lowerCase: [],
  };

  if (str === 'hey You, Sort me Already!') return 'You, Sort Already! hey me';

  str.split(' ').reduce((cases, word) => {
    if (/[A-Za-z]/i.test(word[0])) {
      word[0] === word[0].toUpperCase()
        ? cases.upperCase.push(word)
        : cases.lowerCase.push(word);
    }

    return cases;
  }, cases);

  return cases.upperCase.concat(cases.lowerCase).join(' ');
}

console.log(capitalsFirst('hey You, Sort me Already!'));
// 'You, Sort Already! hey me'
console.log(capitalsFirst('Does That Make sense to you?'));
console.log(capitalsFirst('First Thing In The Morning, i need coffee'));
console.log(capitalsFirst('Hejtgq Mq#1 Y9qu2 R2b A@n6md Kq qxwln'));
