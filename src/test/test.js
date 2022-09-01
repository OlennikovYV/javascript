mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai
      .expect(
        boredom({
          tim: 'change',
          jim: 'accounts',
          randy: 'canteen',
          sandy: 'change',
          andy: 'change',
          katie: 'IS',
          laura: 'change',
          saajid: 'IS',
          alex: 'trading',
          john: 'accounts',
          mr: 'finance',
        })
      )
      .to.equal('kill me now');
    chai
      .expect(
        boredom({
          tim: 'IS',
          jim: 'finance',
          randy: 'pissing about',
          sandy: 'cleaning',
          andy: 'cleaning',
          katie: 'cleaning',
          laura: 'pissing about',
          saajid: 'regulation',
          alex: 'regulation',
          john: 'accounts',
          mr: 'canteen',
        })
      )
      .to.equal('i can handle this');
    chai
      .expect(
        boredom({
          tim: 'accounts',
          jim: 'accounts',
          randy: 'pissing about',
          sandy: 'finance',
          andy: 'change',
          katie: 'IS',
          laura: 'IS',
          saajid: 'canteen',
          alex: 'pissing about',
          john: 'retail',
          mr: 'pissing about',
        })
      )
      .to.equal('party time!!');
  });
});

mocha.run();
