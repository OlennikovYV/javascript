function findOutlier(integers) {
    const evenOdd = num => (num % 2) ? 1 : 0;
    const arr = integers.map(el => evenOdd(el));
    const sort = (arr.slice(0)).sort();
    const findStr = (sort[0] === sort[1] ? sort[sort.length - 1] : sort[0]);
    return integers[arr.indexOf(findStr)];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
console.log(findOutlier([-25967637, 107861855, -70681809, 43800735, -44100612, -84251667, -164195005, -135297709])); //-44100612