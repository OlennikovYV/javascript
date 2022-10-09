function anyArrows(arrows) {
  return arrows.some(arrow => !arrow.damaged);
}

console.log(anyArrows([])); // false
console.log(
  anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
); // true
console.log(anyArrows([{ range: 10, damaged: true }, { damaged: true }])); // false
