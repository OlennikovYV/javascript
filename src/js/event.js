const USER_LIST = [
  { username: 'Timmy', password: 'password' },
  { username: 'Johny', password: 'Hf7FAbf6' },
  { username: 'Alice', password: 'alice' },
  { username: 'Roger', password: 'pass' },
  { username: 'Simon', password: 'says' },
  { username: 'Admin', password: 'ads78adsg7dasga' },
];

class Database {
  login(u, p) {
    for (var i = 0; i < USER_LIST.length; i++) {
      var user = USER_LIST[i];
      if (user.username == u)
        if (eval(`'${user.password}'=="${p}"`))
          return 'Successfully Logged in!';
        else return 'Wrong username or password!';
    }
    return 'Wrong username or password!';
  }
}

function validate(username, password) {
  var database = new Database();

  if (/[^a-z0-9]/gi.test(password)) return 'Wrong username or password!';

  return database.login(username, password);
}

console.log(validate('Timmy', 'password'));
// 'Successfully Logged in!',
console.log(validate('Alice', 'alice'));
// 'Successfully Logged in!',
console.log(validate('Timmy', 'h4x0r'));
// 'Wrong username or password!',
console.log(validate('Timmy', 'password"||""=="'));
// 'Wrong username or password!',
console.log(validate('Admin', 'gs5bw"||1==1//'));
// 'Wrong username or password!',
