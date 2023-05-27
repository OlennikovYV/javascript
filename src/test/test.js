mocha.setup('bdd');

describe(`Aspect Ratio Cropping - Part 1`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('should work for known resolutions', () => {
    deepEqual(aspectRatio(640, 480), [854, 480], 'x = 640, y = 480');
    deepEqual(aspectRatio(960, 720), [1280, 720], 'x = 960, y = 720');
    deepEqual(aspectRatio(1440, 1080), [1920, 1080], 'x = 1440, y = 1080');
    deepEqual(aspectRatio(1920, 1440), [2560, 1440], 'x = 1920, y = 1440');
  });
});

mocha.run();
