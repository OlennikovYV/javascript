function flyBy(lamps, drone) {
  return [...lamps].fill('o', 0, drone.length).join('');
}

console.log(flyBy('xxxxxx', '====T')); // 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T')); // 'oooxxxxxx');
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T')); // 'ooooooooooxxxxx');
