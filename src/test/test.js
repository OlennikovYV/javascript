mocha.setup('bdd');

describe('Fix Timmys Counter', () => {
  it('Fixed Tests', () => {
    chai.expect(createArray(1)).to.eql([1]);
    chai.expect(createArray(2)).to.eql([1, 2]);
    chai.expect(createArray(3)).to.eql([1, 2, 3]);
    chai.expect(createArray(4)).to.eql([1, 2, 3, 4]);
    chai.expect(createArray(5)).to.eql([1, 2, 3, 4, 5]);
  });
});

mocha.run();
