class nameManager {
  listFiles = [];
  nameExists(name) {
    return this.listFiles.includes(name);
  }
  addName(name) {
    this.listFiles.push(name);
  }
  nameWasUnique(name) {
    return this.listFiles.filter(el => el == name).length < 1;
  }
}

const photoManager = new nameManager();

function generateName() {
  function* randomNames() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charsLength = chars.length;

    while (true) {
      yield Array(6)
        .fill(0)
        .map(ch => chars[Math.floor(Math.random() * charsLength)])
        .join('');
    }
  }

  let name = randomNames().next().value;

  return photoManager.nameExists(name) ? generateName() : name;
}

for (let i = 0; i < 10; i++) {
  const name = generateName();

  console.groupCollapsed(name);
  console.log(name);
  console.log(typeof name); // 'string'
  console.log(photoManager.nameWasUnique(name)); // true
  console.log(name.length); // 6
  photoManager.addName(name);
  console.groupEnd();
}
