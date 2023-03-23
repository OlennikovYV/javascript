mocha.setup('bdd');

describe('Hells Kitchen', function () {
  it('Testing for fixed tests', () => {
    chai
      .expect(gordon('What feck damn cake'))
      .to.equal('WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
    chai
      .expect(gordon('are you stu pid'))
      .to.equal('@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
    chai.expect(gordon('i am a chef')).to.equal('*!!!! @M!!!! @!!!! CH*F!!!!');
  });
});

mocha.run();
