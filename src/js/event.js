function capitalsFirst(str) {
  let words = str.split(' ');

  let upper = words.filter(function (x) {
    return x.charAt(0).match(/[A-Z]/);
  });

  let lower = words.filter(function (x) {
    return x.charAt(0).match(/[a-z]/);
  });

  return upper.concat(lower).join(' ');
}

console.log(capitalsFirst('hey You, Sort me Already!'));
// 'You, Sort Already! hey me'
console.log(capitalsFirst('Does That Make sense to you?'));
console.log(capitalsFirst('First Thing In The Morning, i need coffee'));
console.log(capitalsFirst('Hejtgq Mq#1 Y9qu2 R2b A@n6md Kq qxwln'));
