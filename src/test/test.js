mocha.setup('bdd');

describe(
  `Find how many times did a team from a` +
    ` given country win the Champions League?`,
  function () {
    const equal = chai.assert.equal;
    const notEqual = chai.assert.notEqual;
    const deepEqual = chai.assert.deepEqual;
    const isDefined = chai.assert.isDefined;
    const isNull = chai.assert.isNull;
    const isTrue = chai.assert.isTrue;
    const isFalse = chai.assert.isFalse;
    const approximately = chai.assert.approximately;
    const oneOf = chai.assert.oneOf;
    const isNotEmpty = chai.assert.isNotEmpty;
    const lengthOf = chai.assert.lengthOf;

    it('test', () => {
      const winnerList1 = [
        { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
        { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
        { season: '1998–99', team: 'Manchester United', country: 'England' },
        { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
        { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
        { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
        { season: '2002–03', team: 'Milan', country: 'Italy' },
        { season: '2003–04', team: 'Porto', country: 'Portugal' },
        { season: '2004–05', team: 'Liverpool', country: 'England' },
        { season: '2005–06', team: 'Barcelona', country: 'Spain' },
        { season: '2006–07', team: 'Milan', country: 'Italy' },
        { season: '2007–08', team: 'Manchester United', country: 'England' },
        { season: '2008–09', team: 'Barcelona', country: 'Spain' },
        { season: '2009–10', team: 'Internazionale', country: 'Italy' },
        { season: '2010–11', team: 'Barcelona', country: 'Spain' },
        { season: '2011–12', team: 'Chelsea', country: 'England' },
        { season: '2012–13', team: 'Bayern', country: 'Germany' },
        { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
        { season: '2014–15', team: 'Barcelona', country: 'Spain' },
        { season: '2015–16', team: 'Real Madrid', country: 'Spain' },
      ];

      equal(countWins(winnerList1, 'Portugal'), 1);
      equal(countWins(winnerList1, 'FootLand'), 0);
      equal(countWins(winnerList1, 'Spain'), 9);
    });
  }
);

mocha.run();
