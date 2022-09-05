mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    const rts = [
      { n: 3, x: 8, r: 2 },
      { n: 2, x: 6.25, r: 2.5 },
    ];

    rts.forEach(function (o) {
      chai.expect(root(o.x, o.n)).to.equal(o.r);
    });
  });
});

mocha.run();
