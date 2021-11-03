#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import openEditor from 'open-editor';
import getStdin from 'get-stdin';
import tempWrite from 'temp-write';

const cli = meow(`
	Usage
	  $ open-editor <file> …
	  $ cat <file> | open-editor [--ext]

	Options
	  --ext  File extension for stdin

	Examples
	  $ open-editor unicorn.js:5:3 readme.md:10:2
	  $ echo '<h1>Unicorns!</h1>' | open-editor --ext=html
`, {
	importMeta: import.meta,
});

const {input} = cli;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Specify at least one file path');
	process.exit(1);
}

(async () => {
	if (input.length > 0) {
		openEditor(input);
	} else {
		const stdin = await getStdin.buffer();
		const ext = cli.flags.ext || 'txt';
		openEditor([tempWrite.sync(stdin, `stdin.${ext}`)]);
	}
})();
