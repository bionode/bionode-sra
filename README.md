<p align="center">
  <a href="http://bionode.io">
    <img height="200" width="200" title="bionode" alt="bionode logo" src="https://rawgithub.com/bionode/bionode/master/docs/bionode-logo.min.svg"/>
  </a>
  <br/>
  <a href="http://bionode.io/">bionode.io</a>
</p>


# bionode-sra

> A Node.js wrapper for SRA Toolkit.

[![npm](https://img.shields.io/npm/v/bionode-sra.svg?style=flat-square)](http://npmjs.org/package/bionode-sra)
[![Travis](https://img.shields.io/travis/bionode/bionode-sra.svg?style=flat-square)](https://travis-ci.org/bionode/bionode-sra)
[![Coveralls](https://img.shields.io/coveralls/bionode/bionode-sra.svg?style=flat-square)](http://coveralls.io/r/bionode/bionode-sra)
[![Dependencies](http://img.shields.io/david/bionode/bionode-sra.svg?style=flat-square)](http://david-dm.org/bionode/bionode-sra)
[![npm](https://img.shields.io/npm/dt/bionode-sra.svg?style=flat-square)](https://www.npmjs.com/package/bionode-sra)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/bionode/bionode)


## Install

You need to install the latest Node.JS first, please check [nodejs.org](http://nodejs.org) or do the following:

```bash
# Ubuntu
sudo apt-get install npm
# Mac
brew install node
# Both
npm install -g n
n stable
```

To use `bionode-sra` as a command line tool, you can install it globally with `-g`.

```bash
npm install bionode-sra -g
```

Or, if you want to use it as a JavaScript library, you need to install it in your local project folder inside the `node_modules` directory by doing the same command **without** `-g`.

```bash
npm i bionode-sra # 'i' can be used as shortcut to 'install'
```


## Usage

If you're using bionode-sra with Node.js, you can require the module:

```js
var sra = require('bionode-sra')
var fastqDump = sra('fastq-dump')
fastqDump('SRR1509835.sra')
```

Please read the [documentation](http://rawgit.com/bionode/bionode-sra/master/docs/bionode-sra.html) for the methods exposed by bionode.

### Command line examples
```sh
$ bionode-sra fastq-dump SRR1509835.sra
$ bionode-sra fastq-dump SRR1509835.sra fastqOutputDirectory
```



## Documentation

Check our documentation at [doc.bionode.io](http://doc.bionode.io) or do:

```bash
bionode-sra --help
```


## Contributing

We welcome all kinds of contributions at all levels of experience, please read the [CONTRIBUTING.md](CONTRIBUTING.md) to get started!


## Communication channels

Don't be shy! Come talk to us :smiley:

* **Email** [mail@bionode.io](mailto:mail@bionode.io)
* **Chat room** [http://gitter.im/bionode/bionode](http://gitter.im/bionode/bionode)
* **IRC** #bionode on Freenode
* **Twitter** [@bionode](http://twitter.com/@bionode)
