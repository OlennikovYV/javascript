function convertNumberToString(num) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  return numbers[num] || '';
}

function wallpaper(l, w, h) {
  if (!l || !w || !h) return convertNumberToString(0);

  const rolls = 0.52 * 10;
  const wall = 2 * (l * h + w * h);
  const volumeWithNeeds = wall * 1.15;
  const countRolls = Math.ceil(volumeWithNeeds / rolls);

  return convertNumberToString(countRolls);
}

console.log(wallpaper(6.3, 4.5, 3.29)); // 'sixteen'
console.log(wallpaper(7.8, 2.9, 3.29)); // 'sixteen'
console.log(wallpaper(6.3, 5.8, 3.13)); // 'seventeen'
console.log(wallpaper(6.1, 6.7, 2.81)); // 'sixteen'
console.log(wallpaper(0, 5.6, 3.2)); // 'zero'
