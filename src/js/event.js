function getAge(inputString) {
  return Number(inputString.split(' ')[0]);
}

console.log(getAge('4 years old')); // 4
