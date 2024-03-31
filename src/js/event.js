function zebulansNightmare(functionName) {
  return functionName.replace(/_[a-z]/g, el => el[1].toUpperCase());
}

console.log(zebulansNightmare('camel_case')); // 'camelCase'
console.log(zebulansNightmare('mark_as_issue')); // 'markAsIssue'
console.log(zebulansNightmare('copy_paste_pep8')); // 'copyPastePep8'
console.log(zebulansNightmare('goto_next_kata')); // 'gotoNextKata'
console.log(zebulansNightmare('repeat')); // 'repeat'
console.log(zebulansNightmare('trolling_is_fun')); // 'trollingIsFun'
console.log(zebulansNightmare('why')); // 'why'
console.log(zebulansNightmare('123_abc_def')); // '123AbcDef'
