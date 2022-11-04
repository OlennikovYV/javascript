mocha.setup('bdd');

describe('Find the Capitals', () => {
  it('test', () => {
    const state_capitals = [{ state: 'Maine', capital: 'Augusta' }];
    chai
      .expect(capital(state_capitals)[0])
      .to.equal('The capital of Maine is Augusta');

    const country_capitals = [{ country: 'Spain', capital: 'Madrid' }];
    chai
      .expect(capital(country_capitals)[0])
      .to.equal('The capital of Spain is Madrid');

    const mixed_capitals = [
      { state: 'Maine', capital: 'Augusta' },
      { country: 'Spain', capital: 'Madrid' },
    ];
    chai
      .expect(capital(mixed_capitals)[1])
      .to.equal('The capital of Spain is Madrid');
  });
});

mocha.run();
