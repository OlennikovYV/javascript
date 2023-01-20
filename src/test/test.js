mocha.setup('bdd');

describe('Find Duplicates', function () {
  it('test', () => {
    chai.expect(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])).to.eql([4, 3, 1]);
    chai.expect(duplicates([0, 1, 2, 3, 4, 5])).to.eql([]);

    chai.expect(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])).to.eql([4, 3, 1]);
    chai
      .expect(duplicates(['1', 2, 4, '4', 3, '3', 1, 5, 3, 3, 3, 3]))
      .to.eql([3]);
    chai.expect(duplicates([1, 1, 2, 3, 4, 5, 4])).to.eql([1, 4]);
    chai
      .expect(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']))
      .to.eql([4, 3, 'zut']);
  });
});

mocha.run();
