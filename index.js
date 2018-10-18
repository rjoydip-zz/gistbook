'use strict';

const Storage = require('./lib/storge');
const API = require('./lib/api');

const _api = new API();
const _storage = new Storage();

exports.log = global.log = msg => console.log('\n> ', msg);
exports.getToken = () => _storage.get()
exports.setToken = token => _storage.set(token);
exports.hasToken = () => _storage.has;
exports.clearToken = () => _storage.remove();
exports.gists = () => ({
	create: data => _api.create(data)
});
module.exports = exports;
