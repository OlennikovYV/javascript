function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

console.log(checkAlive(5)); // true
console.log(checkAlive(0)); // false
