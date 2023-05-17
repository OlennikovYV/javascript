mocha.setup('bdd');

describe(`Easy Time Convert`, function () {
  const equal = chai.assert.equal;
  const isDefined = chai.assert.isDefined;

  it('test', () => {
    equal(timeConvert(0), '00:00');
    equal(timeConvert(-6), '00:00');
    equal(timeConvert(8), '0' + 0 + ':' + '0' + 8);
    equal(timeConvert(32), '0' + 0 + ':' + 32);
    equal(timeConvert(75), '0' + 1 + ':' + 15);
    equal(timeConvert(63), '0' + 1 + ':' + '0' + 3);
    equal(timeConvert(134), '0' + 2 + ':' + 14);
    equal(timeConvert(180), '0' + 3 + ':' + '0' + 0);
    equal(timeConvert(970), 16 + ':' + 10);
    equal(timeConvert(565757), 9429 + ':' + 17);
  });
});

mocha.run();
