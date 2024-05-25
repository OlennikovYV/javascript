function sortPhotos(pics) {
  const splitName = str => {
    const year = /[\d]{4}/.exec(str)[0];
    const number = /[\d]{1,}$/.exec(str)[0];

    return { year: Number(year), number: Number(number) };
  };
  const joinName = obj => obj.year + '.img' + obj.number;
  const nextFile = obj => obj.year + '.img' + (obj.number + 1);
  const lastFiveFile = list =>
    list.length < 6 ? list : list.slice(list.length - 5);
  const sortByField = (a, b, field) => {
    return a[field] - b[field];
  };
  const sortingList = (a, b) =>
    sortByField(a, b, 'year') || sortByField(a, b, 'number');

  const sortList = pics.map(splitName).sort(sortingList);
  const nextElement = nextFile(sortList[sortList.length - 1]);
  const lastFiveElements = lastFiveFile(sortList);

  return lastFiveElements.map(joinName).concat([nextElement]);
}

console.log(
  sortPhotos(['2016.img1', '2016.img2', '2016.img3', '2016.img4', '2016.img5'])
);
// ['2016.img1', '2016.img2', '2016.img3', '2016.img4',
// '2016.img5', '2016.img6']
console.log(
  sortPhotos(['2016.img4', '2016.img5', '2016.img1', '2016.img3', '2016.img2'])
);
// ['2016.img1', '2016.img2', '2016.img3', '2016.img4',
// '2016.img5', '2016.img6']
console.log(
  sortPhotos(['2012.img2', '2016.img1', '2016.img3', '2016.img4', '2016.img5'])
);
// ['2012.img2', '2016.img1', '2016.img3', '2016.img4',
// '2016.img5', '2016.img6']
console.log(
  sortPhotos([
    '2016.img1',
    '2013.img3',
    '2016.img2',
    '2015.img3',
    '2012.img7',
    '2016.img4',
    '2013.img5',
  ])
);
// ['2013.img5', '2015.img3', '2016.img1', '2016.img2',
// '2016.img4', '2016.img5']
console.log(
  sortPhotos([
    '2016.img7',
    '2016.img2',
    '2016.img3',
    '2015.img3',
    '2012.img8',
    '2016.img4',
    '2016.img5',
  ])
);
// ['2016.img2', '2016.img3', '2016.img4', '2016.img5',
// '2016.img7', '2016.img8']
