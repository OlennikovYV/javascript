function inviteMoreWomen(L) {
  return 0 < L.reduce((sum, man) => sum + man, 0);
}

console.log(inviteMoreWomen([1, -1, 1])); // true
console.log(inviteMoreWomen([1, 1, 1])); // true
console.log(inviteMoreWomen([-1, -1, -1])); // false
console.log(inviteMoreWomen([1, -1])); // false
