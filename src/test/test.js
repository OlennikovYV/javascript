mocha.setup('bdd');

describe(`Dropcaps`, function () {
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

  it('Tests', () => {
    equal(dropCap('Apple Banana'), 'Apple Banana');
    equal(dropCap('Apple'), 'Apple');
    equal(dropCap(''), '');
    equal(dropCap('of'), 'of');
    equal(
      dropCap(
        'Revelation of the contents outraged American public opinion, and helped generate'
      ),
      'Revelation of The Contents Outraged American Public Opinion, And Helped Generate'
    );
    equal(
      dropCap('more  than    one space between words'),
      'More  Than    One Space Between Words'
    );
    equal(dropCap('  leading spaces'), '  Leading Spaces');
    equal(dropCap('trailing spaces   '), 'Trailing Spaces   ');
    equal(dropCap('ALL CAPS CRAZINESS'), 'All Caps Craziness');
    equal(dropCap('rAnDoM CaPs CrAzInEsS'), 'Random Caps Craziness');
  });
});

mocha.run();
