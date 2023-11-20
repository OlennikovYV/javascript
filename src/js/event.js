function chessBoard(rows, columns) {
  let board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if ((i + j) % 2 === 0) {
        row.push('O');
      } else {
        row.push('X');
      }
    }
    board.push(row);
  }

  return board;
}

console.log(chessBoard(6, 4));
// [
//   ['O', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'O'],
//   ['O', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'O'],
//   ['O', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'O'],
// ]

console.log(chessBoard(3, 7));
// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]
