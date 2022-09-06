function bingo(ticket, win) {
  let wins =
    ticket.filter(tick =>
      tick[0].split('').some(char => char.charCodeAt(0) === tick[1])
    ).length >= win;

  return wins ? 'Winner!' : 'Loser!';
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
