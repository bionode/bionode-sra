#!/usr/bin/env node
var JSONStream = require('JSONStream')
var sra = require('./')

var args = process.argv.slice(2)

var command = args[0]
var srcFile = args[1]
var destDir = args[2] || '.'

var sraStream = sra(command)()

sraStream.pipe(JSONStream.stringify(false)).pipe(process.stdout)

if (srcFile) { sraStream.write([srcFile, destDir]) }

process.stdin.setEncoding('utf8');

if (!process.stdin.isTTY) {
  process.stdin.on('data', function(data) {
    if (data.trim() === '') { return }
    sraStream.write(data.trim())
  })
}
