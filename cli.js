#!/usr/bin/env node
'use strict';
const meow = require('meow');
const openEditor = require('open-editor');
const getStdin = require('get-stdin');
const tempWrite = require('temp-write');

const cli = meow(`
	Usage
	  $ open-editor <file> …
	  $ cat <file> | open-editor [--ext]

	Options
	  --ext  File extension for stdin

	Examples
	  $ open-editor unicorn.js:5:3 readme.md:10:2
	  $ echo '<h1>Unicorns!</h1>' | open-editor --ext=html
`);

const input = cli.input;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Specify at least one file path');
	process.exit(1);
}

if (input.length > 0) {
	openEditor(input);
} else {
	getStdin.buffer().then(stdin => {
		const ext = cli.flags.ext || 'txt';
		openEditor([tempWrite.sync(stdin, `stdin.${ext}`)]);
	});
}
