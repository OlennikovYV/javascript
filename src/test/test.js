mocha.setup('bdd');

describe(`Zebulan's Nightmare`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('Testing for fixed tests', () => {
    equal(zebulansNightmare('camel_case'), 'camelCase');
    equal(zebulansNightmare('mark_as_issue'), 'markAsIssue');
    equal(zebulansNightmare('copy_paste_pep8'), 'copyPastePep8');
    equal(zebulansNightmare('goto_next_kata'), 'gotoNextKata');
    equal(zebulansNightmare('repeat'), 'repeat');
    equal(zebulansNightmare('trolling_is_fun'), 'trollingIsFun');
    equal(zebulansNightmare('why'), 'why');
    equal(zebulansNightmare('123_abc_def'), '123AbcDef');
  });
});

mocha.run();
