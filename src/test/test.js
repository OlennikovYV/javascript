mocha.setup('bdd');

const nameTask = `Alan Partridge I - Partridge Watch`;

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
  /* Утверждает, что объект правдив
     Например: 'Что-нибудь' === правдив */
  const isOk = chai.assert.isOk;
  const approximately = chai.assert.approximately;
  /* Утверждает, что целевое значение соответствует
     ожидаемому в пределах диапазона +/- дельта */
  const closeTo = chai.assert.closeTo;
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

  it('Testing for fixed tests', () => {
    strictEqual(part(['Grouse', 'Partridge', 'Pheasant']), "Mine's a Pint!");
    strictEqual(
      part(['Pheasant', 'Goose', 'Starling', 'Robin']),
      "Lynn, I've pierced my foot on a spike!!"
    );
    strictEqual(
      part([
        'Grouse',
        'Partridge',
        'Pheasant',
        'Goose',
        'Starling',
        'Robin',
        'Thrush',
        'Emu',
        'PearTree',
        'Chat',
        'Dan',
        'Square',
        'Toblerone',
        'Lynn',
        'AlphaPapa',
        'BMW',
        'Graham',
        'Tool',
        'Nomad',
        'Finger',
        'Hamster',
      ]),
      "Mine's a Pint!!!!!!!!"
    );
  });
});

mocha.run();
