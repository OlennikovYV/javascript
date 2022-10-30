mocha.setup('bdd');

describe('Mr. Freeze', () => {
  it('should test for something', function () {
    MrFreeze.speak = function () {
      return 1;
    };

    chai
      .expect(function () {
        MrFreeze.speak();
      })
      .to.throw();

    chai.expect(Object.isFrozen(MrFreeze)).to.equal(true);
  });
});

mocha.run();
