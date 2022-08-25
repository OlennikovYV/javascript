const Test = chai;

mocha.setup('bdd');

// your tests here
describe('test suite', function () {
  it('should work', function () {
    chai.assert(true);
  });
});

// describe('Basic Tests', () => {
//   Test.assertSimilar(productArray([12, 20]), [20, 12]);
//   Test.assertSimilar(productArray([12, 20]), [20, 12]);
//   Test.assertSimilar(productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
//   Test.assertSimilar(
//     productArray([13, 10, 5, 2, 9]),
//     [900, 1170, 2340, 5850, 1300]
//   );
//   Test.assertSimilar(
//     productArray([16, 17, 4, 3, 5, 2]),
//     [2040, 1920, 8160, 10880, 6528, 16320]
//   );
// });

// run tests
mocha.run();
