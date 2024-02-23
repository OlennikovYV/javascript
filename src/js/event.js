function testit(s) {
  let result = '';

  for (let i = 0; i < s.length; i += 2) {
    const code1 = s.charCodeAt(i);
    const code2 = s.charCodeAt(i + 1) || code1;
    const number = (code1 + code2) / 2;
    result += String.fromCharCode(Math.floor(number));
  }

  return result;
}

//return s ?
console.log(testit('')); // ""
console.log(testit('a')); // "a"
console.log(testit('b')); // "b"
//return s.substr(0,1) ?
console.log(testit('aa')); // "a"
console.log(testit('ab')); // "a"
console.log(testit('bc')); // "b"
//return s.substr(0,s.length/2) ?
console.log(testit('aaaa')); // "aa"
console.log(testit('aaaaaa')); // "aaa"
//click "Submit" try more testcase...
console.log(testit('lwtflr')); // 'qmo'
console.log(testit('hheelllloo')); // 'hello'
console.log(testit('hheellllo')); // 'hello'
