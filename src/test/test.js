mocha.setup('bdd');

describe('Help Suzuki rake his garden!', function () {
  it('should work for sample (fixed) tests', () => {
    const garden1 =
      'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
    chai
      .expect(rakeGarden(garden1))
      .to.equal(
        'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
      );
    const garden2 =
      'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel';
    chai
      .expect(rakeGarden(garden2))
      .to.equal(
        'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel'
      );
  });
});

mocha.run();
