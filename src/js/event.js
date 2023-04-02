function keepOrder(ary, val) {
  for (let i = 0; i < ary.length; i += 1) {
    if (ary[i] >= val) return i;
  }

  return ary.length;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5)); // 4
console.log(keepOrder([1, 2, 3, 4, 7], 0)); // 0
console.log(keepOrder([1, 1, 2, 2, 2], 2)); // 2
console.log(keepOrder([1, 2, 3, 4], 5)); // 4
console.log(keepOrder([1, 2, 3, 4], -1)); // 0
console.log(keepOrder([1, 2, 3, 4], 2)); // 1
console.log(keepOrder([1, 2, 3, 4], 0)); // 0
console.log(keepOrder([1, 2, 3, 4], 1)); // 0
console.log(keepOrder([1, 2, 3, 4], 2)); // 1
console.log(keepOrder([1, 2, 3, 4], 3)); // 2
