function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}

console.log(howManyTimes(40, 15)); // 3
console.log(howManyTimes(30, 10)); // 3
console.log(howManyTimes(80, 15)); // 6
