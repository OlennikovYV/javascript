multiplicationTable = function(size) {
    const matrixNxN = Array.from(Array(size), el => Array(size));

    for (let i = 0; i <= size - 1; i++)
        for (let j = 0; j <= size - 1; j++) {
            matrixNxN[i][j] = (i + 1) * (j + 1);
        }

    return matrixNxN
}

console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]