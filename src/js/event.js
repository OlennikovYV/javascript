function mixedFraction(s) {
  function shortenFraction(x, y) {
    for (let i = x; i >= 2; i -= 1) {
      if (x % i === 0 && y % i === 0) return [x / i, y / i];
    }

    return [x, y];
  }

  let [x, y] = Array.from(s.split('/'), Number);
  let sign1 = x === Math.abs(x) ? 1 : -1;
  let sign2 = y === Math.abs(y) ? 1 : -1;
  let sign = sign1 * sign2 === -1 ? '-' : '';
  let whole;
  let firstPart, secondPart;
  let space = '';

  if (y === 0) throw 'error';

  x = Math.abs(x);
  y = Math.abs(y);
  whole = Math.trunc(x / y);
  if (x > y) if (x % y !== 0) x = x - whole * y;
  [x, y] = shortenFraction(x, y);

  firstPart = `${whole ? whole : ''}`;
  secondPart = y === 1 ? `` : `${x}/${y}`;
  space = firstPart && secondPart ? ' ' : '';

  if (firstPart && x === 0) return `${sign}${firstPart}`;
  if (!firstPart && x === 0) return '0';
  if (!firstPart) return `${sign}${secondPart}`;

  return sign + firstPart + space + secondPart;
}

console.log(mixedFraction('567/-399')); // '-1 8/19'
console.log(mixedFraction('1/-2')); // '-1/2'
console.log(mixedFraction('-2/9')); // '-2/9'
console.log(mixedFraction('42/9')); // '4 2/3'
console.log(mixedFraction('6/3')); // '2'
console.log(mixedFraction('1/1')); // '1'
console.log(mixedFraction('11/11')); // '1'
console.log(mixedFraction('4/6')); // '2/3'
console.log(mixedFraction('0/18891')); // '0'
console.log(mixedFraction('-10/7')); // '-1 3/7'
console.log(mixedFraction('-22/-7')); // '3 1/7'

try {
  Test.expectError('Must raise ZeroDivisionError', function () {
    mixedFraction('0/0');
  });
} catch (e) {
  console.log('Throw1.');
}

try {
  Test.expectError('Must raise ZeroDivisionError', function () {
    mixedFraction('3/0');
  });
} catch (e) {
  console.log('Throw2.');
}
