function sortByBit(arr) {
  return arr.sort((a, b) => {
    const binA = a.toString(2).padStart(32, '0');
    const binB = b.toString(2).padStart(32, '0');

    const countA = binA.split('').filter(bit => bit === '1').length;
    const countB = binB.split('').filter(bit => bit === '1').length;

    if (countA === countB) return parseInt(binA, 2) - parseInt(binB, 2);

    return countA - countB;
  });
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
let b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];

sortByBit(a);
console.log(a); // [1, 8, 3, 3, 5, 6, 9, 7]

sortByBit(b);
console.log(b); // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
