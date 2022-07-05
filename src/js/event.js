function count(array) {
  return array.reduce((obj, el) => {
    obj[el] ? (obj[el] += 1) : (obj[el] = 1);
    return obj;
  }, {});
}

console.log(count(['a', 'a', 'b', 'b', 'b'])); // { a: 2, b: 3 }
