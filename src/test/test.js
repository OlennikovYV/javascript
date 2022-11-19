mocha.setup('bdd');

describe('Easy wallpaper', () => {
  it('Basic tests', function () {
    chai.expect(wallpaper(6.3, 4.5, 3.29)).to.equal('sixteen');
    chai.expect(wallpaper(7.8, 2.9, 3.29)).to.equal('sixteen');
    chai.expect(wallpaper(6.3, 5.8, 3.13)).to.equal('seventeen');
    chai.expect(wallpaper(6.1, 6.7, 2.81)).to.equal('sixteen');
    chai.expect(wallpaper(0, 5.6, 3.2)).to.equal('zero');
  });
});

mocha.run();
