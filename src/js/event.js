function yourFutureCareer() {
  const career = Math.random();

  if (career <= 0.32) {
    return `FrontEnd Developer`;
  } else if (career <= 0.65) {
    return `BackEnd Developer`;
  } else {
    return `Full-Stack Developer`;
  }
}

yourFutureCareer();

const listCareer = [
  `FrontEnd Developer`,
  `BackEnd Developer`,
  `Full-Stack Developer`,
];

for (let i = 0; i < 9; i++) {
  console.log(`Test ${i + 1} ${listCareer.includes(yourFutureCareer())}`); // True
}
