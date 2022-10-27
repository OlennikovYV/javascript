function checkThreeAndTwo(array) {
  const countChar = array.reduce((count, char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
    return count;
  }, {});

  return (
    Object.values(countChar).some(x => x === 2) &&
    Object.values(countChar).some(x => x === 3)
  );
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'])); // true
console.log(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'])); // false
console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'])); // false
