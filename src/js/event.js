function getUsersIds(str) {
  return str.split(', ').map(word => {
    let result = word;

    result = result.trim();

    result = result.replace(/#/g, '');
    if (result.startsWith('uid')) result = result.substring(3).toLowerCase();

    result = result.trim();

    return result;
  });
}

console.log(getUsersIds('uid12345')); // ['12345']
console.log(getUsersIds('   uidabc  ')); // ['abc']
console.log(getUsersIds('#uidswagger')); // ['swagger']
console.log(getUsersIds('uidone, uidtwo')); // ['one', 'two']
console.log(getUsersIds('uidCAPSLOCK')); // ['capslock']

console.log(getUsersIds('uid##doublehashtag')); // ['doublehashtag']
console.log(getUsersIds('  uidin name whitespace'));
// ['in name whitespace',]
console.log(getUsersIds('uidMultipleuid')); // ['multipleuid']
console.log(getUsersIds('uid12 ab, uid#, uidMiXeDcHaRs'));
// ['12 ab', '', 'mixedchars']
console.log(getUsersIds(' uidT#e#S#t# ')); // ['test']
console.log(
  getUsersIds(
    'uid123456, uidHAx0r, uidhAx#0R, uidHax0r  , uid 1234567890, uid12 34, uidhaX0r, uid12345  67, uid12345 67890, uid123456, uidm#y_iD'
  )
);
// ['123456', 'hax0r', 'hax0r', 'hax0r', '1234567890', '12 34', 'hax0r', '12345  67', '12345 67890', '123456', 'my_id']
console.log(
  getUsersIds(
    'uidhaX0#r, uid  1234567, uid12345  , uidUser, uid1234567 89#, uid123'
  )
);
// ['hax0r', '1234567', '12345', 'user', '1234567 89', '123']
