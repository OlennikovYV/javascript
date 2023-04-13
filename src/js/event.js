function changeMe(moneyIn) {
  switch (moneyIn) {
    case '£5':
      return '20p '.repeat(25).trim();
    case '£2':
      return '20p '.repeat(10).trim();
    case '£1':
      return '20p '.repeat(5).trim();
    case '50p':
      return '20p 20p 10p';
    case '20p':
      return '10p 10p';
    default:
      return moneyIn;
  }
}

let actual = changeMe('£1');
console.log(actual); // '£1'
console.log(actual); //'20p 20p 20p 20p 20p'

actual = changeMe('20p');
console.log(actual); // '20p'
console.log(actual); //'10p 10p'

actual = changeMe('50p');
console.log(actual); // '50p'
console.log(actual); //'20p 20p 10p'

actual = changeMe('£2');
console.log(actual); // '£2'
console.log(actual); //'20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'

console.log(changeMe('Money')); // 'Money'
