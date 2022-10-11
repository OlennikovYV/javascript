mocha.setup('bdd');

describe('Even or Odd - Which is Greater?', () => {
  it('Fixed tests', () => {
    chai.expect(evenOrOdd('12')).to.equal('Even is greater than Odd');
    chai.expect(evenOrOdd('123')).to.equal('Odd is greater than Even');
    chai.expect(evenOrOdd('112')).to.equal('Even and Odd are the same');
  });
});

mocha.run();
