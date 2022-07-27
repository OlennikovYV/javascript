function race(v1, v2, g) {
  let time = g / (v2 - v1);
  return v2 > v1
    ? [
        Math.floor(time),
        Math.floor((time * 60) % 60),
        Math.floor((time * 3600) % 60),
      ]
    : null;
}

console.log(race(920, 850, 70)); // null
console.log(race(720, 850, 70)); // [0, 32, 18]
console.log(race(80, 91, 37)); // [3, 21, 49]
console.log(race(80, 100, 40)); // [2, 0, 0]
console.log(race(720, 850, 37)); // [0, 17, 4]
console.log(race(643, 663, 67)); // [3, 21, 0]
console.log(race(404, 569, 66)); // [0, 24, 0]
console.log(race(820, 850, 550)); // [18, 20, 0]
console.log(race(257, 443, 107)); // [0, 34, 30]
console.log(race(271, 793, 116)); // [0, 13, 20]
