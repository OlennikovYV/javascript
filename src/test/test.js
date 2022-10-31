mocha.setup('bdd');

describe('Enumerable Magic #20 - Cascading Subsets', () => {
  const lst = [3, 5, 8, 13];

  it('Should return cascading lists of 1 element', function () {
    chai.expect(eachCons(lst, 1)).to.eql([[3], [5], [8], [13]]);
  });

  it('Should return cascading lists of 2 element', function () {
    chai.expect(eachCons(lst, 2)).to.eql([
      [3, 5],
      [5, 8],
      [8, 13],
    ]);
  });

  it('Should return cascading lists of 3 element', function () {
    chai.expect(eachCons(lst, 3)).to.eql([
      [3, 5, 8],
      [5, 8, 13],
    ]);
  });

  it('Empty list should return an empty list', function () {
    chai.expect(eachCons([], 3)).to.eql([]);
  });
});

mocha.run();
