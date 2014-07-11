<p align="center">
  <a href="http://bionode.io">
    <img height="200" width="200" title="bionode" alt="bionode logo" src="https://rawgithub.com/bionode/bionode/master/docs/bionode-logo.min.svg"/>
  </a>
  <br/>
  <a href="http://bionode.io/">bionode.io</a>
</p>
# bionode-sra [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Dependency Status](https://david-dm.org/bionode/bionode.png?theme=shields.io)](//david-dm.org/bionode/bionode)

> A Node.js wrapper for SRA Toolkit.

Install
-------

Install bionode-sra with [npm](//npmjs.org):

```sh
$ npm install bionode-sra
```
To use it as a command line tool, you can install it globally by adding ```-g``` .

Usage
-----

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

Contributing
------------

To contribute, clone this repo locally and commit your code on a separate branch.

Please write unit tests for your code, and check that everything works by running the following before opening a pull-request:

```sh
$ npm test
```

Please also check for code coverage:

```sh
$ npm run coverage
```

To rebuild the documentation using the comments in the code:

```sh
$ npm run build-docs
```
Check the [issues](http://github.com/bionode/bionode-sra/issues) for ways to contribute.

Contacts
--------
Bruno Vieira <[mail@bmpvieira.com](mailto:mail@bmpvieira.com)> [@bmpvieira](//twitter.com/bmpvieira)

Yannick Wurm ([yannick.poulet.org](http://yannick.poulet.org)) [@yannick__](//twitter.com/yannick__)

License
-------

bionode-sra is licensed under the [MIT](https://raw.github.com/bionode/bionode/master/LICENSE) license.  
Check [ChooseALicense.com](http://choosealicense.com/licenses/mit) for details.

[npm-url]: //npmjs.org/package/bionode-sra
[npm-image]: https://badge.fury.io/js/bionode-sra.png
[travis-url]: //travis-ci.org/bionode/bionode-sra
[travis-image]: https://travis-ci.org/bionode/bionode-sra.png?branch=master
[coveralls-url]: //coveralls.io/r/bionode/bionode-sra
[coveralls-image]: https://coveralls.io/repos/bionode/bionode-sra/badge.png
[depstat-url]: //david-dm.org/bionode/bionode-sra
[depstat-image]: https://david-dm.org/bionode/bionode-sra.png
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bionode/bionode-sra/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
