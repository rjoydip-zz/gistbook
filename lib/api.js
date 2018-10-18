const request = require('request');
const Storage = require('./storge');

class API {
	constructor() {
		this._storage = new Storage();
		this.base = 'https://api.github.com';
	}

	async create(body) {
		return new Promise((resolve, reject) => {
			request({
				method: 'POST',
				url: `${this.base}/gists?access_token=${this._storage.get()}`,
				headers: {
					'Content-Type': 'application/json',
					'User-Agent': 'express-fastify-oauth-tester'
				},
				body: JSON.stringify(body)
			}, function (error, response, body) {
				if (error) {
					reject(error);
				} else {
					resolve(body);
				}
			});
		});
	}
}

module.exports = API;
