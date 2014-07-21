#!/usr/bin/env node
var JSONStream = require('JSONStream')
var sra = require('./')

var args = process.argv.slice(2)

var command = args[0]
var srcFile = args[1]
var destDir = args[2] || '.'


var sraStream = sra(command)

sraStream([srcFile, destDir]).pipe(JSONStream.stringify(false)).pipe(process.stdout)