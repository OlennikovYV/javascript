function findAdded(st1, st2) {
  for (let i = 0; i < st1.length; i++) {
    st2 = st2.replace(st1[i], '');
  }

  return st2.split('').sort().join('');
}

console.log(findAdded('44554466', '447554466')); // '7'
console.log(findAdded('9876521', '9876543211')); // '134'
console.log(findAdded('4455446', '447555446666')); // '56667'
console.log(findAdded('678', '876')); // ''
console.log(findAdded('678', '6')); // ''
