mocha.setup('bdd');

describe('Last', () => {
  it('test', () => {
    chai.expect(last([1, 2, 3, 4, 5])).to.equal(5); //-- array
    chai.expect(last('abcde')).to.equal('e'); //-- string
    chai.expect(last(1, 'b', 3, 'd', 5)).to.equal(5); //-- arguments
  });
});

mocha.run();
