mocha.setup('bdd');

describe('Split In Parts', () => {
  it('test', () => {
    chai
      .expect(splitInParts('supercalifragilisticexpialidocious', 3))
      .to.equal('sup erc ali fra gil ist ice xpi ali doc iou s');
    chai.expect(splitInParts('HelloKata', 1)).to.equal('H e l l o K a t a');
    chai.expect(splitInParts('HelloKata', 9)).to.equal('HelloKata');
  });
});

mocha.run();
