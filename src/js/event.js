function testResult(array) {
  const averageMarks = Number(
    array.reduce((sum, mark) => sum + mark) / array.length
  ).toFixed(3);
  const h = array.filter(mark => mark > 8).length;
  const a = array.filter(mark => mark > 6 && mark < 9).length;
  const l = array.filter(mark => mark < 7).length;

  const resultList = [Number(averageMarks), { h: h, a: a, l: l }];

  return l == 0 && a == 0 ? resultList.concat('They did well') : resultList;
}

console.log(testResult([10, 9, 9, 10, 9, 10, 9]));
// [ 9.429, { h: 7, a: 0, l: 0 }, 'They did well' ]
console.log(testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]));
// [ 7.9, { h: 5, a: 2, l: 3 } ]
console.log(testResult([5, 6, 5, 7, 4, 5, 6, 6, 5]));
// [ 5.444, { h: 0, a: 1, l: 8 } ]
console.log(testResult([9, 8, 7, 6, 9, 8, 10, 7, 6]));
// [ 7.778, { h: 3, a: 4, l: 2 } ]
console.log(testResult([9, 10, 10, 10, 10, 10, 8, 9, 7, 8, 10]));
// [ 9.182, { h: 8, a: 3, l: 0 } ]
console.log(testResult([3, 5, 6, 10, 8, 4, 10, 9]));
// [ 6.875, { h: 3, a: 1, l: 4 } ]
console.log(testResult([10, 9, 9, 10, 9, 10]));
// [ 9.5, { h: 6, a: 0, l: 0 }, 'They did well' ]
console.log(testResult([7, 6, 8, 9, 6, 7, 5, 9]));
// [ 7.125, { h: 2, a: 3, l: 3 } ]
console.log(testResult([9, 9, 8, 9, 8, 9]));
// [ 8.667, { h: 4, a: 2, l: 0 } ]
console.log(testResult([10, 9, 6, 7, 10, 8, 9, 10]));
// [ 8.625, { h: 5, a: 2, l: 1 } ]
