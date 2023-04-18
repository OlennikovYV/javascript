mocha.setup('bdd');

describe('Convert Hash To An Array', function () {
  it('basic tests', function () {
    chai
      .expect(convertHashToArray({ name: 'Jeremy' }))
      .to.eql([['name', 'Jeremy']]);
    chai.expect(convertHashToArray({ name: 'Jeremy', age: 24 })).to.eql([
      ['age', 24],
      ['name', 'Jeremy'],
    ]);
    chai
      .expect(
        convertHashToArray({
          name: 'Jeremy',
          age: 24,
          role: 'Software Engineer',
        })
      )
      .to.eql([
        ['age', 24],
        ['name', 'Jeremy'],
        ['role', 'Software Engineer'],
      ]);
    chai
      .expect(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 }))
      .to.eql([
        ['powerLevelOver', 9000],
        ['product', 'CodeWars'],
      ]);
    chai.expect(convertHashToArray({})).to.eql([]);
  });
});

mocha.run();
