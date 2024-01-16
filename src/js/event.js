function checkWinner(arr) {
  function Eq(a, b, c) {
    return a != 0 && a == b && a == c;
  }

  for (let i = 0; i < 3; i++) {
    if (Eq(arr[0][i], arr[1][i], arr[2][i])) {
      return arr[0][i];
    }
    if (Eq(arr[i][0], arr[i][1], arr[i][2])) {
      return arr[i][0];
    }
  }

  if (Eq(arr[0][0], arr[1][1], arr[2][2])) {
    return arr[0][0];
  }
  if (Eq(arr[0][2], arr[1][1], arr[2][0])) {
    return arr[0][2];
  }

  return 0;
}

function isSolved(board) {
  const winner = checkWinner(board);

  if (winner) {
    if (winner === 1) return 1;
    if (winner === 2) return 2;
  }

  if (board.toString().includes('0')) return -1;

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
