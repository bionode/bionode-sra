#!/usr/bin/env node
var JSONStream = require('JSONStream')
var minimist = require('minimist')
var sra = require('./')
var split = require('split')

var args = minimist(process.argv.slice(2))

var lastArg = args._[args._.length - 1]
var wantsStdin = false
if (lastArg === '-') {
  wantsStdin = true
  args._.pop()
}

var command = args._[0]
var srcFile = args._[1]
var destDir = args._[2] || '.'

var sraStream = sra(command)()

sraStream.pipe(JSONStream.stringify(false)).pipe(process.stdout)

if (srcFile) { sraStream.write([srcFile, destDir]) }

if (wantsStdin) {
  process.stdin.setEncoding('utf8')
  process.stdin.pipe(split()).on('data', function (data) {
    if (data.trim() === '') { return }
    sraStream.write(data.trim())
  })
}
