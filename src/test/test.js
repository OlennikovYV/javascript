mocha.setup('bdd');

describe(`Naming Files`, function () {
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

  it('Description cases', function () {
    deepEqual(nameFile('IMG <index_no>', 4, 1), [
      'IMG 1',
      'IMG 2',
      'IMG 3',
      'IMG 4',
    ]);
    deepEqual(nameFile('image #<index_no>.jpg', 3, 7), [
      'image #7.jpg',
      'image #8.jpg',
      'image #9.jpg',
    ]);
    deepEqual(nameFile('#<index_no> #<index_no>', 3, -2), [
      '#-2 #-2',
      '#-1 #-1',
      '#0 #0',
    ]);
  });
  it('More examples', function () {
    deepEqual(nameFile('<file> number <index_no>', 5, 0), [
      '<file> number 0',
      '<file> number 1',
      '<file> number 2',
      '<file> number 3',
      '<file> number 4',
    ]);
    deepEqual(nameFile('<file_no> number <index_no>', 2, -1), [
      '<file_no> number -1',
      '<file_no> number 0',
    ]);
    deepEqual(nameFile('file', 2, 3), ['file', 'file']);
    deepEqual(nameFile('<file_no> number <index_no>', -1, 0), []);
    deepEqual(nameFile('file <index_no>', 2, 0.1), []);
    deepEqual(nameFile('file <index_no>', 0.2, 0), []);
    deepEqual(nameFile('file <index_no>', 0, 0), []);
  });
});

mocha.run();
