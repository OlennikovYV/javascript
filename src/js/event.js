function pak(s) {
  return s.trim().split(' ').join(' pak ');
}

console.log(pak('   '));
// ''
console.log(pak('Man I need a taxi up to Ubud'));
// 'Man pak I pak need pak a pak taxi pak up pak to pak Ubud'
console.log(pak('What time are we climbing up the volcano?'));
// 'What pak time pak are pak we pak climbing pak up pak the pak volcano?'
console.log(pak('Take me to Semynak!'));
// 'Take pak me pak to pak Semynak!'
