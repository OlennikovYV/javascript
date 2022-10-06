function playerRankUp(points) {
  const winMessage =
    'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.';
  return points >= 100 && winMessage;
}

console.log(playerRankUp(64)); // false
console.log(playerRankUp(101));
// 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
