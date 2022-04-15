function sortArray(array) {
    let odd = [];

    const checkOdd = num => num % 2 !== 0;
    array.forEach(el => checkOdd(el) ? odd.push(el) : 0);
    odd.sort((a, b) => a - b);

    return array.map(el => checkOdd(el) ? odd.shift() : el);
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); //  [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); //  [1, 3, 5, 8, 0]
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [ 1, 3, 5, 2, 8, 4 ]
console.log(sortArray([])); // []