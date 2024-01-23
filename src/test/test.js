mocha.setup('bdd');

describe(`Rock Paper Scissors Lizard Spock`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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
  const error = chai.assert.throws;

  it('player 1 Wins', function () {
    equal(rpsls('rock', 'lizard'), 'Player 1 Won!');
    equal(rpsls('paper', 'rock'), 'Player 1 Won!');
    equal(rpsls('scissors', 'lizard'), 'Player 1 Won!');
    equal(rpsls('lizard', 'paper'), 'Player 1 Won!');
    equal(rpsls('spock', 'rock'), 'Player 1 Won!');
  });

  it('player 2 wins', function () {
    equal(rpsls('lizard', 'scissors'), 'Player 2 Won!');
    equal(rpsls('spock', 'lizard'), 'Player 2 Won!');
    equal(rpsls('paper', 'lizard'), 'Player 2 Won!');
    equal(rpsls('scissors', 'spock'), 'Player 2 Won!');
    equal(rpsls('rock', 'spock'), 'Player 2 Won!');
  });

  it('draw', function () {
    equal(rpsls('rock', 'rock'), 'Draw!');
    equal(rpsls('spock', 'spock'), 'Draw!');
  });
});

mocha.run();
