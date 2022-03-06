function moveZeros(arr) {
    let arrNoZeros = [],
        arrZeros = [];

    arr.map(el => (el !== 0) ? arrNoZeros.push(el) : arrZeros.push(el));

    return arrNoZeros.concat(arrZeros);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]