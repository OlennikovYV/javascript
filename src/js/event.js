function testResult(array) {
  const hash = {
    h: 0,
    a: 0,
    l: 0,
  };
  let sumMarks = 0;
  let averageMarks;
  let resultList = [];

  const isOnlyHighMarks = hash => {
    return hash['a'] == 0 && hash['l'] == 0;
  };

  array.map(el => {
    switch (true) {
      case el < 7:
        hash['l'] += 1;
        break;
      case el < 9:
        hash['a'] += 1;
        break;
      default:
        hash['h'] += 1;
        break;
    }

    sumMarks += el;
  });

  averageMarks = Math.round((sumMarks / array.length) * 1000) / 1000;
  resultList.push(averageMarks);

  resultList.push(hash);

  if (isOnlyHighMarks(hash)) resultList.push('They did well');

  return resultList;
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
