mocha.setup('bdd');

describe(`Lexical this`, function () {
  const equal = chai.assert.equal;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('test', () => {
    const people = [
      ['bob', 'john'],
      ['bob', 'john', 'dave'],
      [],
      ['bob', 'john', 'dave', 'matt', 'alex'],
    ];

    for (let i = 0; i < 4; i++) {
      const person = Person();
      person.fillFriends(people[i]);
      deepEqual(person._friends, people[i]);
    }
  });
});

mocha.run();
