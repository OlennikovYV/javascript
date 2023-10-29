function bald(x) {
  function hairs(countHair) {
    if (countHair === 0) return 'Clean!';
    if (countHair === 1) return 'Unicorn!';
    if (countHair === 2) return 'Homer!';
    if (countHair <= 5) return 'Careless!';

    return 'Hobo!';
  }

  const countHairShown = x.split('').filter(hair => hair === '/').length;
  const hairsRemoved = x.replaceAll(/[\/]/g, '-');

  return [hairsRemoved, hairs(countHairShown)];
}

console.log(bald('-//-')); // ['----', 'Homer!']
console.log(bald('/---------')); // ['----------', 'Unicorn!']
console.log(bald('/-----/-')); // ['--------', 'Homer!']
console.log(bald('--/--/---/-/---')); // ['---------------', 'Careless!']
console.log(bald('-//--//--/----/-')); // ['----------------', 'Hobo!']
