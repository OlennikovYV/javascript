function chuckPushUps(string) {
  let bin;

  if (typeof string !== 'string' || string === '') return 'FAIL!!';

  bin = string.match(/[01]+/g);

  if (bin == null) return 'CHUCK SMASH!!';

  let isQuotes = /\"/g.test(string);
  let isOnlySpase = /^[0|1| ]+$/g.test(string);

  return isQuotes || isOnlySpase
    ? Math.max(...bin.map(el => parseInt(el, 2)))
    : parseInt(bin.join(''), 2);
}

console.log(
  chuckPushUps(
    '1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'
  )
); // 6
console.log(
  chuckPushUps(
    '1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'
  )
); // 11
console.log(
  chuckPushUps(
    '10000 "Nice Beard" 1111 "Are you wearing denim shorts?" 1110 1101'
  )
); // 16
console.log(chuckPushUps('')); // 'FAIL!!'
console.log(chuckPushUps([])); // 'FAIL!!'
console.log(chuckPushUps(1)); // 'FAIL!!'
console.log(chuckPushUps('1000 1001 1010 1011 110')); // 11
console.log(
  chuckPushUps(
    'clean house, stop being such a badass, cook dinner, buy some sleeves for that stupid denim vest!'
  )
); // 'CHUCK SMASH!!'
