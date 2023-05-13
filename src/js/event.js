function wrap(value) {
  return { value };
}

const res = wrap('MyTest');

console.log(typeof res);
// 'object', "Doesn't return an object"
console.log(res.value);
// 'MyTest'

console.log(wrap(343).value);
// 343

var obj = { test: 'testy' };

console.log(wrap(obj).value);
// obj
