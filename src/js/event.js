function createSecretHolder(secret) {
	return {
		_secret: secret,
		getSecret() { return this._secret },
		setSecret(num) { return this._secret = num }
	};
}

let obj = createSecretHolder(5);
console.log(obj.getSecret()); // returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // returns 2