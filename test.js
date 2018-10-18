const test = require('ava');
const {hasToken, clearToken, getToken, setToken} = require('.');

const token = '1619d499fb023058e82feb993dce934645be787';

test('empty token', t => {
	clearToken();
	t.is(hasToken(), false);
});

test('get token', t => {
	setToken(token);
	t.truthy(getToken());
});
