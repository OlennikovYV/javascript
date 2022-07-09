function overTheRoad(address, n) {
  let countHouse, numberHouseOtherSide;

  if (address % 2 === 0) {
    countHouse = n + 1 - address / 2;
    numberHouseOtherSide = countHouse * 2 - 1;
  } else {
    countHouse = (address + 1) / 2;
    numberHouseOtherSide = (n + 1 - countHouse) * 2;
  }

  return numberHouseOtherSide;
}

console.log(overTheRoad(1, 3)); // 6
console.log(overTheRoad(3, 3)); // 4
console.log(overTheRoad(2, 3)); // 5
console.log(overTheRoad(3, 5)); // 8
console.log(overTheRoad(7, 11)); // 16
console.log(overTheRoad(20, 1000000)); // 1999981
console.log(overTheRoad(23633656673, 310027696726)); // 596421736780
