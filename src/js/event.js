function _if(bool, func1, func2) {
  return (bool ? func1 : func2)();
}

_if(
  true,
  function () {
    console.log('True');
  },
  function () {
    console.log('false');
  }
); // True
_if(
  false,
  function () {
    console.log('True');
  },
  function () {
    console.log('false');
  }
); // false
