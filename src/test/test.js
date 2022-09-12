mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(Math.round(0.4)).to.equal(0); // 'Math.round(0.4)');
    chai.expect(Math.round(0.5)).to.equal(1); // 'Math.round(0.5)');

    chai.expect(Math.ceil(0.4)).to.equal(1); // 'Math.ceil(0.4)');
    chai.expect(Math.ceil(0.5)).to.equal(1); // 'Math.ceil(0.5)');
    chai.expect(Math.ceil(5)).to.equal(5); // 'Math.ceil(5)');

    chai.expect(Math.floor(0.4)).to.equal(0); // 'Math.floor(0.4)');
    chai.expect(Math.floor(0.5)).to.equal(0); // 'Math.floor(0.5)');
    chai.expect(Math.floor(5)).to.equal(5); // 'Math.floor(5)');
  });
});

mocha.run();
