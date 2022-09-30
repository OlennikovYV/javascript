mocha.setup('bdd');

describe('Double Sort', () => {
  it('Tests', function () {
    chai.expect(dbSort([6, 2, 3, 4, 5])).to.eql([2, 3, 4, 5, 6]);
    chai.expect(dbSort([14, 32, 3, 5, 5])).to.eql([3, 5, 5, 14, 32]);
    chai.expect(dbSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
    chai
      .expect(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]))
      .to.eql([0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']);
    chai
      .expect(dbSort(['C', 'W', 'W', 'W', 1, 2, 0]))
      .to.eql([0, 1, 2, 'C', 'W', 'W', 'W']);
    chai.expect(
      dbSort(['Apple', 46, '287', 574, 'Peach', '3', '69', 78, 'Grape', '423']),
      [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']
    );
  });
});

mocha.run();
