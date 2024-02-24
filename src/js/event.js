function scoreThrows(radii) {
  let isAllPointsLessFive = true;
  const sumPoints = radii.reduce((sum, point) => {
    if (point >= 5) isAllPointsLessFive = false;

    if (point >= 5 && point <= 10) sum += 5;
    if (point >= 0 && point < 5) sum += 10;

    return sum;
  }, 0);

  return sumPoints + Number(isAllPointsLessFive && radii.length > 0) * 100;
}

console.log(scoreThrows([1, 5, 11])); // 15
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100])); // 0
console.log(scoreThrows([1, 2, 3, 4])); // 140
console.log(scoreThrows([])); // 0, 'Empty list'
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 65
console.log(scoreThrows([0, 5, 10, 10.5, 4.5])); // 30
