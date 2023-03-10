function borrow(s) {
  return s
    .split(' ')
    .map(word => word.replace(/[!|?|.|:|,|;]/g, '').toLowerCase())
    .join('');
}

console.log(borrow('WhAt! FiCK! DaMn CAke?')); // 'whatfickdamncake'
console.log(borrow('THE big PeOpLE Here!!')); // 'thebigpeoplehere'
console.log(borrow('i AM a TINY BoY!!')); // 'iamatinyboy'
