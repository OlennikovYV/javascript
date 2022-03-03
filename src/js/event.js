function findOutlier(integers) {
    const even = integers.filter(el => !(el % 2));
    const odd = integers.filter(el => (el % 2));
    return (even.length === 1) ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
console.log(findOutlier([-25967637, 107861855, -70681809, 43800735, -44100612, -84251667, -164195005, -135297709])); //-44100612