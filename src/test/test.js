mocha.setup('bdd');

describe('Well of Ideas - Harder Version', () => {
  it('Testing for fixed tests', () => {
    chai
      .expect(
        well([
          ['bad', 'bAd', 'bad'],
          ['bad', 'bAd', 'bad'],
          ['bad', 'bAd', 'bad'],
        ])
      )
      .to.equal('Fail!');
    chai
      .expect(
        well([
          ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
          ['bad', 'bAd', 'bad'],
          ['GOOD', 'bad', 'bad', 'bAd'],
        ])
      )
      .to.equal('Publish!');
    chai
      .expect(
        well([
          ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
          ['bad'],
          ['gOOd', 'BAD'],
        ])
      )
      .to.equal('I smell a series!');
    chai
      .expect(
        well([
          ['TEST', 'bAd', 'good', 'bAd', 'BAD'],
          ['bad', 'bAd', 'bAd', 6],
          ['bAd', 'bAd', 'CAPS', '8', 'six', 'BAD'],
        ])
      )
      .to.equal('Publish!');
  });
});

mocha.run();
