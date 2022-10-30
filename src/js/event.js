let MrFreeze = {};

Object.freeze(MrFreeze);

MrFreeze.speak = function () {
  return 1;
};

try {
  MrFreeze.speak();
} catch (e) {
  console.log(e);
}

console.log(Object.isFrozen(MrFreeze)); // true
