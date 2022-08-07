function findChildren(dancingBrigade) {
  return dancingBrigade
    .split('')
    .sort((a, b) => a.localeCompare(b, 'kf', { caseFirst: 'upper' }))
    .join('');
}

console.log(findChildren('beeeEBb')); // 'BbbEeee'
console.log(findChildren('uwwWUueEe')); // 'EeeUuuWww'
console.log(findChildren('abBA')); // 'AaBb'
console.log(findChildren('AaaaaZazzz')); // 'AaaaaaZzzz'
console.log(findChildren('CbcBcbaA')); // 'AaBbbCcc'
console.log(findChildren('xXfuUuuF')); // 'FfUuuuXx'
