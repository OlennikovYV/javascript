mocha.setup('bdd');

describe('Pyramid Array', () => {
  it('Testing for 0', () => chai.expect(pyramid(0)).to.eql([]));
  it('Testing for 1', () => chai.expect(pyramid(1)).to.eql([[1]]));
  it('Testing for 2', () => chai.expect(pyramid(2)).to.eql([[1], [1, 1]]));
  it('Testing for 3', () =>
    chai.expect(pyramid(3)).to.eql([[1], [1, 1], [1, 1, 1]]));
});

mocha.run();
