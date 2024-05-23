class nameManager {
  listFiles = [];
  nameExists(name) {
    return this.listFiles.includes(name);
  }
  addName(name) {
    this.listFiles.push(name);
  }
  nameWasUnique(name) {
    return !this.listFiles.includes(name);
  }
}

const photoManager = new nameManager();

function generateName() {
  let randString = '';

  const generate = length => {
    let str = '';
    const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';

    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * chrs.length);
      str += chrs[pos];
    }

    return str;
  };

  do {
    randString = generate(6);
  } while (photoManager.nameExists(randString));

  photoManager.addName(randString);

  return randString;
}

for (let i = 0; i < 10; i++) {
  const name = generateName();
  console.group(name);
  console.log(name);
  console.log(typeof name); // 'string'
  console.log(photoManager.nameWasUnique(name)); // true
  console.log(name.length); // 6
  console.groupEnd();
}
