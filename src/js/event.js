function checkThreeAndTwo(array) {
  const countChar = array.reduce((count, char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
    return count;
  }, {});

  const arrayCountChar = Array.from(Object.entries(countChar));

  return (
    arrayCountChar.length === 2 &&
    (arrayCountChar[0][1] === 2 || arrayCountChar[0][1] === 3)
  );
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'])); // true
console.log(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'])); // false
console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'])); // false
