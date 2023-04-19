mocha.setup('bdd');

describe('Make them bark!', function () {
  const assert = chai.assert;
  const apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
  const zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

  it('test', () => {
    assert.equal(apollo.bark(), 'Woof!');
    assert.equal(zeus.bark(), 'Woof!');
  });
});

mocha.run();
