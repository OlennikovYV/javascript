mocha.setup('bdd');

const nameTask = `"this" is an other problem`;

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

  let n;

  beforeEach(async function () {
    n = new NamedOne('John', 'Doe');
  });

  it('1. create a NamedOne', function () {
    strictEqual(n.firstName, 'John', 'Wrong first name');
    strictEqual(n.lastName, 'Doe', 'Wrong last name');
    strictEqual(n.fullName, 'John Doe', 'Wrong full name');
  });

  it('2. change firstName', function () {
    n.firstName = 'Jane';
    strictEqual(n.firstName, 'Jane', 'Wrong first name');
    strictEqual(n.fullName, 'Jane Doe', 'Wrong full name');
  });

  it('3. change lastName', function () {
    n.firstName = 'Jane';
    n.lastName = 'Smith'; // -> n.name = "Jane Smith"
    strictEqual(n.lastName, 'Smith', 'Wrong last name');
    strictEqual(n.fullName, 'Jane Smith', 'Wrong full name');
  });

  it('4. change fullName', function () {
    n.fullName = 'Juan Herrero';
    strictEqual(n.fullName, 'Juan Herrero', 'Wrong full name');
    strictEqual(n.lastName, 'Herrero', 'Wrong last name');
    strictEqual(n.firstName, 'Juan', 'Wrong first name');
  });
});

mocha.run();
