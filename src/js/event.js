function isSolved(board) {
  board = board.join('-').replace(/,/g, '');

  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;

  if (/0/.test(board)) return -1;

  return 0;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // -1 (Not finished)

console.log(
  isSolved([
    [1, 2, 1],
    [2, 2, 1],
    [1, 1, 2],
  ])
); // 0 (Draw)

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [1, 2, 0],
  ])
); // 1 (Winner "player 1")

console.log(
  isSolved([
    [0, 2, 1],
    [0, 2, 1],
    [1, 2, 0],
  ])
); // 2 (Winner "player 2")
