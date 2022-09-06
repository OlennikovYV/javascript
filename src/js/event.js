function bingo(ticket, win) {
  let wins;

  const coincidence = ticket.map(tick => {
    let tickNoDup = [...new Set(tick[0])];
    let winningTicket = tickNoDup.map(char => char.charCodeAt(0) === tick[1]);

    return winningTicket;
  });

  const mini_wins = coincidence.map(
    tick => tick.filter(el => el === true).length
  );

  if (mini_wins.filter(countWin => countWin > 1).length > 0) return 'Loser!';

  wins = mini_wins.reduce((sum, win) => sum + win, 0);

  return wins >= win ? 'Winner!' : 'Loser!';
}

console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  )
); // 'Loser!'
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1
  )
); // 'Winner!'
console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3
  )
); // 'Loser!'
console.log(
  bingo(
    [
      ['TRDESPNV', 84],
      ['OMXHOXZA', 72],
      ['YZ', 88],
      ['KVIK', 89],
      ['ZTUYRAMN', 71],
      ['FHZZLAO', 77],
      ['NQWY', 79],
      ['WVKD', 76],
      ['YBU', 74],
    ],
    1
  )
); // 'Winner!'
console.log(
  bingo(
    [
      ['ARPERKQQ', 81],
      ['NCIVK', 72],
      ['OE', 84],
    ],
    2
  )
); // 'Loser!'
console.log(
  bingo(
    [
      ['SEEY', 84],
      ['QZGTOXB', 79],
      ['RELQNQ', 81],
      ['OV', 88],
    ],
    1
  )
); // 'Winner!'
