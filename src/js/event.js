function sayHello(name, city, state) {
  const fullName = name.join(' ');
  const location = `${city}, ${state}`;
  return `Hello, ${fullName}! Welcome to ${location}!`;
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')); // 'Hello, John Smith! Welcome to Phoenix, Arizona!'
console.log(
  sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois')
); // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
console.log(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York')); // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'
