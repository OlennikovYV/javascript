mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai
      .expect(
        fireFight(
          'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'
        )
      )
      .to.equal(
        'Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast'
      );
    chai
      .expect(fireFight('Mast Deck Engine Water Fire'))
      .to.equal('Mast Deck Engine Water ~~');
    chai
      .expect(
        fireFight(
          'Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain'
        )
      )
      .to.equal(
        '~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain'
      );
  });
});

mocha.run();
