mocha.setup('bdd');

describe('Autocomplete! Yay!', () => {
  it('Testing for fixed tests', () => {
    chai
      .expect(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']))
      .to.eql(['airplane', 'airport']);
    chai
      .expect(
        autocomplete('a-~! @#$%^&*()_+1234567890', [
          'airplane',
          'apple',
          'air',
          'avenue',
          'airport',
          'adamantium',
          'awkwardness',
          'awesome',
          'amazing',
          'ball',
          'book',
          'bike',
          'bill',
          'billiard',
          'bell',
          'bowl',
          'inconceivable',
          'jump',
          'jumping',
          'judge',
          'judging',
        ])
      )
      .to.eql(['airplane', 'apple', 'air', 'avenue', 'airport']);
  });
});

mocha.run();
