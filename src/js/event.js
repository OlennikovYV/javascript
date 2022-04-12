function validSolution(board) {
    let check = false;

    const createArray = length => Array.from({ length }, () => 0);
    const createArrayN = (n = 9) => createArray(n).map(e => createArray(n));
    const checkMatrix = array => array.every(e => e.every(el => el === 1));
    const countMatrix = createArrayN();
    let lineMatrix, columnMatrix;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] !== 0)
                countMatrix[0][board[i][j] - 1]++;
            if (board[i][j + 3] !== 0)
                countMatrix[1][board[i][j + 3] - 1]++;
            if (board[i][j + 6] !== 0)
                countMatrix[2][board[i][j + 6] - 1]++;

            if (board[i + 3][j] !== 0)
                countMatrix[3][board[i + 3][j] - 1]++;
            if (board[i + 3][j + 3] !== 0)
                countMatrix[4][board[i + 3][j + 3] - 1]++;
            if (board[i + 3][j + 6] !== 0)
                countMatrix[5][board[i + 3][j + 6] - 1]++;

            if (board[i + 6][j] !== 0)
                countMatrix[6][board[i + 6][j] - 1]++;
            if (board[i + 6][j + 3] !== 0)
                countMatrix[7][board[i + 6][j + 3] - 1]++;
            if (board[i + 6][j + 6] !== 0)
                countMatrix[8][board[i + 6][j + 6] - 1]++;
        }
    }

    check = checkMatrix(countMatrix);
    if (!check) return false;

    lineMatrix = createArrayN();
    columnMatrix = createArrayN();

    board.map((e, i) => {
        e.map((el, j) => {
            if (el !== 0)
                columnMatrix[j][el - 1]++;
        });
        e.map((el, j) => {
            if (el !== 0)
                lineMatrix[i][el - 1]++;
        });
    });

    check = checkMatrix(lineMatrix);
    if (!check) return false;

    check = checkMatrix(columnMatrix);
    if (!check) return false;

    return true;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); //  true

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); //  false