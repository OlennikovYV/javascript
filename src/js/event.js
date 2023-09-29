function strCount(obj) {
  let resultCount = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'object') resultCount += strCount(obj[key]);
    if (typeof obj[key] === 'string') resultCount++;
  }

  return resultCount;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  })
); // 3
