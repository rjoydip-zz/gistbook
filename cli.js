#!/usr/bin/env node

const {
	hasToken,
	clearToken,
	getToken,
	setToken,
	log,
	gists,
} = require('.');

require('yargs')
	.command({
		command: 'token <option> [value]',
		desc: 'Set access token',
		builder: yargs => yargs.default('value', null),
		handler: argv => {
			if (argv.option === 'set') {
				if (argv.value) {
					setToken(argv.value);
				} else {
					log('Please check your input');
				}
			} else if (argv.option === 'clear') {
				if (hasToken()) {
					clearToken();
					log('Your access token has been cleared');
				} else {
					log('No token found');
				}
			} else {
				if (hasToken()) {
					log('Your access token ' + getToken());
				} else {
					log('No token found');
				}
			}
		}
	})
	.command({
		command: 'gists <option> [value]',
		desc: 'Set access token',
		builder: yargs => yargs.default('value', null),
		handler: (argv) => {
			const data = {};
			if (argv.value && hasToken()) {
				if (argv.option === 'create') {
					data.title = argv.title || argv.t || 'Hello title';
					data.description = argv.description || argv.desc || argv.d || 'Hello description';
					data.files = {
						[argv.file || argv.f || 'hello.txt']: {
							content: argv.content || argv.c || 'hello world'
						}
					};
					data.public = argv.public || argv.p || false;
					gists().create(data)
						.then(resp => log('Your gist has been created successfully'))
						.catch(err => log(JSON.stringify(err)));
				}
			} else {
				log('Invalid input/token');
			}
		}
	})
	.help()
	.argv
