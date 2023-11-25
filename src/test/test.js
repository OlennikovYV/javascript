mocha.setup('bdd');

describe(`Simple Fun #152: Invite More Women?`, function () {
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

  it('It should works for basic tests.', function () {
    equal(inviteMoreWomen([1, -1, 1]), true);
    equal(inviteMoreWomen([1, 1, 1]), true);
    equal(inviteMoreWomen([-1, -1, -1]), false);
    equal(inviteMoreWomen([1, -1]), false);
  });
});

mocha.run();
