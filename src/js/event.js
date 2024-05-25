const reg = /(\d*)\.img(\d*)/;

function compare(a, b) {
  const regA = reg.exec(a);
  const regB = reg.exec(b);
  const year = parseInt(regA[1]) - parseInt(regB[1]);
  if (year == 0) {
    return parseInt(regA[2]) - parseInt(regB[2]);
  }
  return year;
}

function sortPhotos(pics) {
  const sorted = pics.sort(compare).splice(-5);
  const last = sorted[sorted.length - 1];
  sorted.push(
    last.replace(reg, (match, p1, p2) => `${p1}.img${parseInt(p2) + 1}`)
  );
  return sorted;
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
