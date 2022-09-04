mocha.setup('bdd');

it('snoopy', () => {
  chai.expect(snoopy.bark()).to.equal('Woof');
});
it('scoobydoo', () => {
  chai.expect(scoobydoo.bark()).to.equal('Woof');
});

mocha.run();
