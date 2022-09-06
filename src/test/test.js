mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai
      .expect(
        bingo(
          [
            ['ABC', 65],
            ['HGR', 74],
            ['BYHT', 74],
          ],
          2
        )
      )
      .to.equal('Loser!');
    chai
      .expect(
        bingo(
          [
            ['ABC', 65],
            ['HGR', 74],
            ['BYHT', 74],
          ],
          1
        )
      )
      .to.equal('Winner!');
    chai
      .expect(
        bingo(
          [
            ['HGTYRE', 74],
            ['BE', 66],
            ['JKTY', 74],
          ],
          3
        )
      )
      .to.equal('Loser!');
    chai
      .expect(
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
      )
      .to.equal('Winner!');
    chai
      .expect(
        bingo(
          [
            ['ARPERKQQ', 81],
            ['NCIVK', 72],
            ['OE', 84],
          ],
          2
        )
      )
      .to.equal('Loser!');
    chai
      .expect(
        bingo(
          [
            ['SEEY', 84],
            ['QZGTOXB', 79],
            ['RELQNQ', 81],
            ['OV', 88],
          ],
          1
        )
      )
      .to.equal('Winner!');
  });
});

mocha.run();
