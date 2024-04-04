function riders(stations) {
  let countRider = 1;

  stations.reduce((countMiles, miles) => {
    countMiles += miles;
    if (countMiles > 100) {
      countRider++;
      return miles;
    }

    return countMiles;
  }, 0);

  return countRider;
}

console.log(riders([18, 15])); // 1
console.log(riders([50, 50])); // 1
console.log(riders([43, 23, 40, 13])); // 2
console.log(riders([33, 8, 16, 47, 30, 30, 46])); // 3
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49])); // 4
console.log(riders([17, 16, 12, 7, 11, 8, 18, 47, 36, 17, 6, 23, 50, 42])); // 4
