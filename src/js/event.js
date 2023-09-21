function randomCase(x) {
  const randomBoolean = () => (Math.random() < 0.5 ? 0 : 1);
  return x
    .split('')
    .map(char => (randomBoolean() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

let v = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Donec eleifend cursus lobortis',
  'THIS IS AN ALL CAPS STRING',
  'this is an all lower string',
];

for (let i in v) {
  let r = randomCase(v[i]);
  console.log(v[i]);
  console.log(r);
  console.log(r.toLowerCase() === v[i].toLowerCase()); // true
  console.log(r === v[i]); // false
  console.log(r === v[i].toUpperCase()); // false
  console.log(r === v[i].toLowerCase()); // false
}
