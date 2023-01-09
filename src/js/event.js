function searchNames(logins) {
  return logins.filter(el => /_$/.test(el[0]));
}

const a = [
    ['foo', 'foo@foo.com'],
    ['bar_', 'bar@bar.com'],
  ],
  b = [['bar_', 'bar@bar.com']];

console.log(searchNames(a).join(':'), b.join(':'));
