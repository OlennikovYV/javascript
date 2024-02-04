mocha.setup('bdd');

describe(`Master of Files`, function () {
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

  it('Tests', () => {
    equal(
      'Nothing Else Matters.mp3'.isAudio(),
      false,
      'Filename contains spaces'
    );
    equal('NothingElseMatters.mp3'.isAudio(), true);
    equal('DaftPunk.FLAC'.isAudio(), false, 'Extension may only be lower case');
    equal('DaftPunk.flac'.isAudio(), true);
    equal('AmonTobin.aac'.isAudio(), true);
    equal(' Amon Tobin.alac'.isAudio(), false, 'Filename contains spaces');
    equal('tobin.alac'.isAudio(), true);
    equal('Home.jpg'.isImage(), true);
    equal('flat.jpeg'.isImage(), true);
    equal('icon.bmp'.isImage(), true);
    equal(
      'icon2.jpg'.isImage(),
      false,
      'Filename contains a non-letter character'
    );
    equal('bounce.gif'.isImage(), true);
    equal('animate bounce.GIF'.isImage(), false, 'Extension not lower case');
    equal('transparency.png'.isImage(), true);
  });
});

mocha.run();
