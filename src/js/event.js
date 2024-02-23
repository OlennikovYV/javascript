function testit(s) {
  return s.replace(/(..)/g, s =>
    String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2)
  );
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
