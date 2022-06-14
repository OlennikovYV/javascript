var greet = function (name) {
  const firstName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  return `Hello ${firstName}!`;
};

console.log(greet('riley')); // 'Hello Riley!'
