const getStatus = isBusy => ({ status: isBusy ? 'busy' : 'available' });

console.log(getStatus(true).status); // 'busy'
