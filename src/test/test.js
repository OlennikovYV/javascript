mocha.setup('bdd');

describe('Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()', () => {
  it('test', () => {
    chai.expect(firstToLast('ababc', 'a')).to.equal(2);
    chai.expect(firstToLast('ababc', 'c')).to.equal(0);
    chai.expect(firstToLast('ababc', 'd')).to.equal(-1);
  });
});

mocha.run();
