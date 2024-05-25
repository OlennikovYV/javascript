mocha.setup('bdd');

const nameTask = `Take a picture !`;

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
    deepEqual(
      sortPhotos([
        '2016.img1',
        '2016.img2',
        '2016.img3',
        '2016.img4',
        '2016.img5',
      ]),
      [
        '2016.img1',
        '2016.img2',
        '2016.img3',
        '2016.img4',
        '2016.img5',
        '2016.img6',
      ]
    );
    deepEqual(
      sortPhotos([
        '2016.img4',
        '2016.img5',
        '2016.img1',
        '2016.img3',
        '2016.img2',
      ]),
      [
        '2016.img1',
        '2016.img2',
        '2016.img3',
        '2016.img4',
        '2016.img5',
        '2016.img6',
      ]
    );
    deepEqual(
      sortPhotos([
        '2012.img2',
        '2016.img1',
        '2016.img3',
        '2016.img4',
        '2016.img5',
      ]),
      [
        '2012.img2',
        '2016.img1',
        '2016.img3',
        '2016.img4',
        '2016.img5',
        '2016.img6',
      ]
    );
    deepEqual(
      sortPhotos([
        '2016.img1',
        '2013.img3',
        '2016.img2',
        '2015.img3',
        '2012.img7',
        '2016.img4',
        '2013.img5',
      ]),
      [
        '2013.img5',
        '2015.img3',
        '2016.img1',
        '2016.img2',
        '2016.img4',
        '2016.img5',
      ]
    );
    deepEqual(
      sortPhotos([
        '2016.img7',
        '2016.img2',
        '2016.img3',
        '2015.img3',
        '2012.img8',
        '2016.img4',
        '2016.img5',
      ]),
      [
        '2016.img2',
        '2016.img3',
        '2016.img4',
        '2016.img5',
        '2016.img7',
        '2016.img8',
      ]
    );
  });
});

mocha.run();
