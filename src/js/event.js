function overTheRoad(address, n) {
  return n * 2 + 1 - address;
}

console.log(overTheRoad(1, 3)); // 6
console.log(overTheRoad(3, 3)); // 4
console.log(overTheRoad(2, 3)); // 5
console.log(overTheRoad(3, 5)); // 8
console.log(overTheRoad(7, 11)); // 16
console.log(overTheRoad(20, 1000000)); // 1999981
console.log(overTheRoad(23633656673, 310027696726)); // 596421736780
