mocha.setup('bdd');

describe('Tail Swap', function () {
  it('Basic Tests', function () {
    chai
      .expect(tailSwap(['abc:123', 'cde:456']))
      .to.eql(['abc:456', 'cde:123']);
    chai
      .expect(tailSwap(['a:12345', '777:xyz']))
      .to.eql(['a:xyz', '777:12345']);
  });
});

mocha.run();
