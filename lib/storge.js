#!/usr/bin/env node
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const {join} = path;
const {existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync} = fs;

class Storage {
	constructor() {
		this._ensureMainAppDir();
		this._mainStorageFile = join(this._mainAppDir, '.gistbook');
	}

	get _mainAppDir() {
		return os.homedir();
	}

	_ensureMainAppDir() {
		if (!existsSync(this._mainAppDir)) {
			mkdirSync(this._mainAppDir);
		}
	}

	get has() {
		return existsSync(this._mainStorageFile);
	}

	get() {
		return this.has ? readFileSync(this._mainStorageFile, 'utf8'): '';
	}

	set(data) {
		writeFileSync(this._mainStorageFile, data, 'utf8');
	}

	remove() {
		return this.has ? unlinkSync(this._mainStorageFile) : null;
	}
}

module.exports = Storage;
