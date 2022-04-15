function sortArray(array) {
    let odd = [];

    odd = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);

    return array.map(el => el % 2 !== 0 ? odd.shift() : el);
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); //  [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); //  [1, 3, 5, 8, 0]
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [ 1, 3, 2, 8, 5, 4 ]
console.log(sortArray([])); // []