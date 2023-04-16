function initials(n) {
  return n
    .split(' ')
    .map(
      (el, i, arr) =>
        el[0].toUpperCase() + (i === arr.length - 1 ? el.slice(1) : '')
    )
    .join('.');
}

console.log(initials('code wars')); // 'C.Wars'
console.log(initials('Barack hussain obama')); // 'B.H.Obama'
console.log(initials('barack hussain Obama')); // 'B.H.Obama'
