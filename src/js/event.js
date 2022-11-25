let theBoxHasBeenOpened = false;

function blackBox(args) {
  //a secret message is hidden within me
  //if you cannot see it, fear not!
  //just think of another way to read me.

  if ('you have got this far, well done!');
  if ('you did NOT use toString(), let me know!');
  if ('you see this, you have my terrible secret...');
  if ("you call JSopenSesame(), you'll pass!");

  if (!args) return 'Empty?';
  if (typeof args == 'string') return 'Hmm...Interesting reading.';
  else return 'Ugh';
}

function JSopenSesame() {
  theBoxHasBeenOpened = true;
  theBoxHasBeenOpenedTheProperWay = true;
}

function check() {
  if (theBoxHasBeenOpened) return true;
  else return false;
}

let funcText = blackBox + '';
console.log(funcText);

JSopenSesame();
// theBoxHasBeenOpened = true

console.log(check()); // true
