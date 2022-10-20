function flyBy(lamps, drone) {
  let count = drone.length;
  let countLamp = lamps.length;

  if (count > countLamp) count = countLamp;

  return 'o'.repeat(count) + 'x'.repeat(countLamp - count);
}

console.log(flyBy('xxxxxx', '====T')); // 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T')); // 'oooxxxxxx');
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T')); // 'ooooooooooxxxxx');
