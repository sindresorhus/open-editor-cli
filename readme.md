# open-editor-cli [![Build Status](https://travis-ci.org/sindresorhus/open-editor-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/open-editor-cli)

> Open files in your editor at a specific line and column


## Install

```
$ npm install --global open-editor-cli
```


## Usage

```
$ open-editor --help

  Usage
    $ open-editor <file> …
    $ cat <file> | open-editor [--ext]

  Options
    --ext  File extension for stdin

  Examples
    $ open-editor unicorn.js:5:3 readme.md:10:2
    $ echo '<h1>Unicorns!</h1>' | open-editor --ext=html
```


## Related

- [open-editor](https://github.com/sindresorhus/open-editor) - API for this module
- [open-cli](https://github.com/sindresorhus/open-cli) - Opens stuff like websites, files, executables


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
