function strToHash(str) {
  const hash = {};

  if (str.length) {
    const items = str.split(', ');
    items.forEach(el => {
      const [key, value] = el.split('=');

      hash[key] = Number(value);
    });
  }

  return hash;
}

console.log(strToHash('a=1, b=2, c=3, d=4')); //
// {a: 1, b: 2, c: 3, d: 4}
console.log(strToHash(''));
// {}
