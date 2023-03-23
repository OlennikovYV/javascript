function gordon(a) {
  return a
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEOUI]/g, char => (char === 'A' ? '@' : '*'));
}

console.log(gordon('What feck damn cake'));
// 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
console.log(gordon('are you stu pid'));
// '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
console.log(gordon('i am a chef'));
// '*!!!! @M!!!! @!!!! CH*F!!!!');
