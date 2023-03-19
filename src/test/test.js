mocha.setup('bdd');

describe('Making Copies', function () {
  it('test', () => {
    const t = [1, 2, 3, 4];

    tCopy = copyList(t);

    chai.assert.deepEqual(t, tCopy, 'Copy unsuccessful');
    t[1] += 5;

    chai.assert.notDeepEqual(t, tCopy, 'The array was not properly copied');
  });
});

mocha.run();
