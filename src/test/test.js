mocha.setup('bdd');

describe('Add property to every object in array', () => {
  for (let key in questions) {
    it(`Test questions[${key}]`, () => {
      chai.expect(questions[key].usersAnswer).to.equal(null);
    });
  }
});

mocha.run();
