#!/usr/bin/env node

'use strict';
const meow = require('meow');
const {execute} = require('.');

const cli = meow(`
	Usage
	  $ gistbook [input]

	Options
		--set, -s Set access token
		--get, -g Get access token
		--remove, -r Remove access token
		--create, -c Create

	Examples
		$ gistbook --set 1619d499fb
		$ gistbook --get
		$ gistbook --remove
		$ gistbook --create
`, {
	flags: {
		set: {
			type: 'boolean',
			alias: 's'
		},
		get: {
			type: 'boolean',
			alias: 'g'
		},
		remove: {
			type: 'boolean',
			alias: 'r'
		},
		create: {
			type: 'boolean',
			alias: 'c'
		},
		title: {
			type: 'boolean',
			alias: 't'
		},
		description: {
			type: 'boolean',
			alias: 'd'
		},
		file: {
			type: 'boolean',
			alias: 'f'
		},
		text: {
			type: 'boolean',
			alias: 'o'
		},
		public: {
			type: 'boolean',
			alias: 'p'
		}
	}
});

execute(cli.input, cli.flags);
