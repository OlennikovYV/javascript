function searchNames(logins) {
  return logins.filter(el => el[0].endsWith('_'));
}

const a = [
    ['foo', 'foo@foo.com'],
    ['bar_', 'bar@bar.com'],
  ],
  b = [['bar_', 'bar@bar.com']];

console.log(searchNames(a).join(':'), b.join(':'));
