function containAllRots(strng, arr) {
  function getAllRotation(str) {
    let allRotation = [];

    for (let i = 0; i < str.length; i += 1) {
      let rotation = str.slice(i) + str.slice(0, i);

      allRotation.push(rotation);
    }

    return allRotation;
  }

  if (strng === '') return true;

  return getAllRotation(strng).every(str => arr.includes(str));
}

console.log(containAllRots('', [])); // true
console.log(containAllRots('', ['bsjq', 'qbsj'])); // true
console.log(
  containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])
); // true
console.log(
  containAllRots('XjYABhR', [
    'TzYxlgfnhf',
    'yqVAuoLjMLy',
    'BhRXjYA',
    'YABhRXj',
    'hRXjYAB',
    'jYABhRX',
    'XjYABhR',
    'ABhRXjY',
  ])
); // false
