function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return '';

  return listOfCat
    .map(categoryBook => {
      return `(${categoryBook} : ${listOfArt
        .filter(code => code[0] === categoryBook)
        .reduce(
          (sumBooks, countBooks) => sumBooks + Number(countBooks.split(' ')[1]),
          0
        )})`;
    })
    .join(' - ');
}

let b, c, res;
b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
c = ['A', 'B', 'C', 'D'];
console.log(stockList(b, c));
// '(A : 0) - (B : 1290) - (C : 515) - (D : 600)'

b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
c = ['A', 'B'];
console.log(stockList(b, c));
// '(A : 200) - (B : 1140)'
