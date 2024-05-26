mocha.setup('bdd');

const nameTask = `Chuck Norris I - Push Ups`;

describe(nameTask, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;
  /* Утверждает, что подмножество включено в надмножество в том же порядке,
    начиная с первого элемента в надмножестве. Использует глубокую проверку
    равенства.
    Например: [{b:1},{a:2}] === [{b:1},{a:2}] */
  const includeDeepOrderedMembers = chai.assert.includeDeepOrderedMembers;

  it('Tests', () => {
    equal(
      chuckPushUps(
        '1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'
      ),
      6
    );
    equal(
      chuckPushUps(
        '1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'
      ),
      11
    );
    equal(
      chuckPushUps(
        '10000 "Nice Beard" 1111 "Are you wearing denim shorts?" 1110 1101'
      ),
      16
    );
    equal(chuckPushUps(''), 'FAIL!!');
    equal(chuckPushUps([]), 'FAIL!!');
    equal(chuckPushUps(1), 'FAIL!!');
    equal(chuckPushUps('1000 1001 1010 1011 110'), 11);
    equal(
      chuckPushUps(
        'clean house, stop being such a badass, cook dinner, buy some sleeves for that stupid denim vest!'
      ),
      'CHUCK SMASH!!'
    );
  });
});

mocha.run();
