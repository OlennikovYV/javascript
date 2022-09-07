mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    const tests = [
      ['797', '77'],
      ['7979797', '7777'],
      ['165561786121789797', '16556178612178977'],
    ];

    for (const [input, expected] of tests) {
      chai.expect(sevenAte9(input)).to.equal(expected);
    }
  });
});

mocha.run();
