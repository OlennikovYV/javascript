function strToHash(str) {
  if (str.length === 0) return {};

  return str.split(', ').reduce((hash, el) => {
    const newObject = {};
    const entries = el.split('=');

    newObject[entries[0]] = Number(entries[1]);

    return Object.assign(hash, newObject);
  }, {});
}

console.log(strToHash('a=1, b=2, c=3, d=4')); //
// {a: 1, b: 2, c: 3, d: 4}
console.log(strToHash(''));
// {}
